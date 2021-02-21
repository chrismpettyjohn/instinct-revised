import React, {useState} from 'react';
import {clientContext} from './Client';
import {ContextProvidersProps} from '../ContextProviders.types';

export function ClientContextProvider({children}: ContextProvidersProps) {
  const [loadingProgress, setLoading] = useState(0);
  return (
    <clientContext.Provider value={{loadingProgress, setLoading}}>
      {children}
    </clientContext.Provider>
  );
}
