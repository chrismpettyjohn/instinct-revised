import {ReactNode} from 'react';

export type APIWrapperChildren<O> = (data: O) => ReactNode;

export interface APIWrapperProps<I, O> {
  promise: (input?: I) => Promise<O>;
  params?: I;
  children: (data: O) => ReactNode;
}
