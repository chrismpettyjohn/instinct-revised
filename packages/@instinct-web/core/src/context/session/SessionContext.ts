import {createContext} from 'react';
import {defaultSessionContext, SessionContext} from './';

export const sessionContext = createContext<SessionContext>(
  defaultSessionContext
);
