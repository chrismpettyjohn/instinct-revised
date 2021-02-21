import React from 'react';
import {
  ClientContextProvider,
  ContextProvidersProps,
  ConfigContextProvider,
  SessionContextProvider,
  ThemeContextProvider,
  HealthContextProvider,
} from './index';

export function ContextProviders({children}: ContextProvidersProps) {
  return (
    <ConfigContextProvider>
      <SessionContextProvider>
        <ClientContextProvider>
          <HealthContextProvider>
            <ThemeContextProvider>{children}</ThemeContextProvider>
          </HealthContextProvider>
        </ClientContextProvider>
      </SessionContextProvider>
    </ConfigContextProvider>
  );
}
