import {ReactNode} from 'react';
import {ClientType} from '@instinct-web/core';

export interface ClientOptionProps {
  title: string;
  children: ReactNode;
  type: ClientType;
}
