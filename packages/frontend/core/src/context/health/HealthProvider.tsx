import {healthContext} from './';
import React, {useState} from 'react';
import {Health, exampleHealth} from '@instinct-prj/interface';
import {ContextProvidersProps} from '../ContextProviders.types';

export function HealthContextProvider({children}: ContextProvidersProps) {
  const [state, setState] = useState<Health>(exampleHealth);

  function setHealth(changes: Partial<Health>): void {
    setState(_ => ({
      ..._,
      ...changes,
    }));
  }

  return (
    <healthContext.Provider value={{health: state, setHealth}}>
      {children}
    </healthContext.Provider>
  );
}
