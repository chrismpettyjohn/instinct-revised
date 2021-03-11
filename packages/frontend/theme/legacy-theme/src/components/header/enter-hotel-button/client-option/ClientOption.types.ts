import {ReactNode} from 'react';
import {ClientType} from '@instinct-prj/interface';

export interface ClientOptionProps {
  title: string;
  children: ReactNode;
  type: ClientType;
}
