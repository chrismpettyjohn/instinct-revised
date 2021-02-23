import {createContext} from 'react';
import {ConfigContext, defaultConfigInterface} from './';

export const configContext = createContext<ConfigContext>(
  defaultConfigInterface
);
