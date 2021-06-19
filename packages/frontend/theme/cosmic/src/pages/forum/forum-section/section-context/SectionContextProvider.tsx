import React from 'react';
import {sectionContext} from './SectionContext';
import {SectionContextProviderProps} from './SectionContext.types';

export function SectionContextProvider({
  children,
  defaultSection,
}: SectionContextProviderProps) {
  return (
    <sectionContext.Provider value={defaultSection}>
      {children}
    </sectionContext.Provider>
  );
}
