import React, {useContext} from 'react';
import {themeContext} from '@instinct-web/core';
import {ClientOptionProps} from './ClientOption.types';

export function ClientOption({children, title, type}: ClientOptionProps) {
  const {clientType, setStore} = useContext(themeContext);

  return (
    <div
      className="client-option row"
      style={{background: clientType === type ? '#001726' : ''}}
      onClick={() => setStore({clientType: type})}
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
