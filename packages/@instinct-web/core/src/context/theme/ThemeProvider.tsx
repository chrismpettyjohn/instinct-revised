import React, {useEffect, useState} from 'react';
import {ContextProvidersProps} from '../ContextProviders.types';
import {ThemeContext, themeContext, defaultThemeContextInterface} from './';

export function ThemeContextProvider({children}: ContextProvidersProps) {
  const [state, setState] = useState<ThemeContext>(
    defaultThemeContextInterface
  );

  useEffect(() => {
    const clientSet = document.body.classList.contains('client-modal');
    if (state.showClient && !clientSet) {
      document.body.classList.add('client-modal');
      return;
    }

    if (clientSet) {
      document.body.classList.remove('client-modal');
    }
  }, [state.showClient]);

  function setStore(changes: Partial<ThemeContext>): void {
    setState(_ => ({
      ..._,
      ...changes,
    }));
  }

  return (
    <themeContext.Provider value={{...state, setStore}}>
      {children}
    </themeContext.Provider>
  );
}
