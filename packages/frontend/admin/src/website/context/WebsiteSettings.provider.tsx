import {toast} from 'react-toastify';
import {websiteSettingsContext} from './WebsiteSettings';
import React, {ReactElement, useEffect, useState} from 'react';
import {configService, useFetchFullConfig} from '@instinct-prj/frontend';
import {
  defaultWebsiteSettingsContextState,
  WebsiteSettingsContextState,
} from './WebsiteSettings.types';
import {ConfigDTO} from '@instinct-prj/interface';

export function WebsiteSettingsProvider({children}: {children: ReactElement}) {
  const defaultConfig = useFetchFullConfig();
  const [state, setState] = useState<WebsiteSettingsContextState>(
    defaultWebsiteSettingsContextState
  );

  useEffect(() => {
    if (defaultConfig !== undefined) {
      setState(_ => ({
        ..._,
        config: defaultConfig,
      }));
    }
  }, [defaultConfig]);

  if (defaultConfig === undefined) {
    return <i className="fa fa-spinner fa-spin" />;
  }

  function setConfig<K extends keyof ConfigDTO>(
    key: K,
    value: ConfigDTO[K]
  ): void {
    setState(_ => ({
      ..._,
      config: {
        ..._.config,
        [key]: value,
      },
    }));
  }

  async function saveChanges(): Promise<void> {
    setState(_ => ({
      ..._,
      showError: false,
      showSpinner: true,
    }));

    try {
      await configService.updateConfig(state.config);
      toast.success('Website settings have been updated');
      setState(_ => ({..._, showSpinner: false}));
    } catch {
      setState(_ => ({
        ..._,
        showError: true,
        showSpinner: false,
      }));
    }
  }

  const Provider = websiteSettingsContext.Provider;

  return (
    <Provider value={{...state, setConfig, saveChanges}}>
      {state.showError && (
        <div className="alert alert-danger">
          <i className="fa fa-exclamation-triangle mr-2" />
          <span>Your changes could not be saved</span>
        </div>
      )}
      {children}
    </Provider>
  );
}
