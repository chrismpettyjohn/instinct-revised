import React, {useContext} from 'react';
import {configContext} from '../../../../context/config';
import {sessionContext} from '../../../../context/session';
import {useRenewSessionSSO} from '../../../../hooks/session';

export function ClientContainer() {
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
