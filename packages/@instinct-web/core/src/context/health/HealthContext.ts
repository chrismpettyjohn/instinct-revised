import {createContext} from 'react';
import {defaultHealthInterface, HealthContext} from './Health.types';

export const healthContext = createContext<HealthContext>(
  defaultHealthInterface
);
