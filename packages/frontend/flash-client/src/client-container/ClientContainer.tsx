// @ts-ignore this dependency does not support Typescript
import Flash from 'swfobject';
import React, {useContext, useEffect} from 'react';
import {
  configContext,
  sessionContext,
  useRenewSessionSSO,
} from '@instinct-web/core';

export function ClientContainer() {
  useRenewSessionSSO();
  const {sso} = useContext(sessionContext);
  const {config} = useContext(configContext);

  useEffect(() => {
    function setupGame(): void {
      const variables: Record<string, string> = {
        'connection.info.host': config.emulatorIP,
        'connection.info.port': config.emulatorPort,
        'url.prefix': config.siteLink,
        'site.url': config.siteLink,
        'client.reload.url': `${config.siteLink}/client`,
        'client.fatal.error.url': `${config.siteLink}/client`,
        'client.connection.failed.url': `${config.siteLink}/client`,
        'external.variables.txt': config.swfExternalVariables,
        'external.texts.txt': config.swfExternalTexts,
        'productdata.load.url': config.swfProductData,
        'furnidata.load.url': config.swfFurniData,
        'external.figurepartlist.txt': config.swfFigureData,
        'external.override.variables.txt': `${config.swfBaseURL}}/override/variables.txt`,
        'flash.client.url': config.swfBaseURL,
        'client.starting.revolving': config.loadingMessage,
        'processlog.enabled': '1',
        'use.sso.ticket': '1',
        'sso.ticket': sso!,
        'flash.client.origin': 'popup',
        'client.allow.cross.domain': '1',
        'client.notify.cross.domain': '0',
      };

      const parameters: Record<string, string> = {
        base: config.swfBaseURL,
        allowScriptAccess: 'always',
        menu: 'false',
      };

      Flash.embedSWF(
        config.swfHabbo,
        'client-area',
        '100%',
        '100%',
        '10.0.0',
        '',
        variables,
        parameters,
        null
      );
    }

    if (sso !== undefined) {
      setupGame();
    }
  }, [config, sso]);

  return <div id="client-area" />;
}
