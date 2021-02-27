import React, {useContext} from 'react';
import {
  useRenewSessionSSO,
  sessionContext,
  configContext,
} from '@instinct-web/core';

export function NitroClient() {
  useRenewSessionSSO();
  const {sso} = useContext(sessionContext);
  const {config} = useContext(configContext);

  return (
    <iframe
      src={`${config.nitroURL}?sso=${sso}`}
      style={{height: '100%', width: '100%'}}
      frameBorder="none"
    />
  );
}
