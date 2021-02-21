import {configContext} from './';
import React, {useState} from 'react';
import {Config, defaultConfig} from '@instinct-prj/interface';
import {ContextProvidersProps} from '../ContextProviders.types';

export function ConfigContextProvider({children}: ContextProvidersProps) {
  const [state, setState] = useState<Config>(defaultConfig);

  function setConfig(changes: Partial<Config>): void {
    setState(_ => ({
      ..._,
      ...changes,
    }));
  }

  return (
    <configContext.Provider value={{config: state, setConfig}}>
      {children}
    </configContext.Provider>
  );
}
