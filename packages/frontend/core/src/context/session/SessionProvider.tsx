import {sessionContext} from './';
import React, {useState} from 'react';
import {User} from '@instinct-prj/interface';
import {ContextProvidersProps} from '../ContextProviders.types';

export function SessionContextProvider({children}: ContextProvidersProps) {
  const [user, setUser] = useState<User>();
  const [sso, setSSO] = useState<string>();
  const [banned, setBanned] = useState(false);
  const [online, setOnline] = useState(false);

  return (
    <sessionContext.Provider
      value={{sso, setSSO, user, setUser, online, setOnline, banned, setBanned}}
    >
      {children}
    </sessionContext.Provider>
  );
}
