import React, {useContext} from 'react';
import {ClientOptionProps} from './ClientOption.types';
import {sessionContext, sessionService} from '@instinct-web/core';

export function ClientOption({children, title, type}: ClientOptionProps) {
  const {user, setUser} = useContext(sessionContext);

  async function onClick() {
    setUser({clientType: type});
    await sessionService.updateClientType(type);
  }

  return (
    <div
      className="client-option row"
      style={{background: user!.clientType === type ? '#001726' : ''}}
      onClick={onClick}
    >
      <div className="col-12">
        <div className="d-flex">
          <img className="mr-2" src={`/img/logo/${type}.svg`} width={25} />
          <h4>{title}</h4>
        </div>
        {children}
      </div>
    </div>
  );
}
