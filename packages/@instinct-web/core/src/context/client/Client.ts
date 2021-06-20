import {createContext} from 'react';
import {ClientContext, defaultClientContext} from './Client.types';

export const clientContext = createContext<ClientContext>(defaultClientContext);
