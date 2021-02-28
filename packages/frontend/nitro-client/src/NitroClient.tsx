import React, {useContext, useEffect} from 'react';
import {
  useRenewSessionSSO,
  sessionContext,
  configContext,
} from '@instinct-web/core';

export function NitroClient() {
  useRenewSessionSSO();
  const {sso, setUser} = useContext(sessionContext);
  const {config} = useContext(configContext);

  useEffect(() => {
    setUser({clientType: 'nitro'});
  }, []);

  return (
    <iframe
      src={`${config.nitroURL}?sso=${sso}`}
      style={{height: '100%', width: '100%'}}
      frameBorder="none"
    />
  );
}
