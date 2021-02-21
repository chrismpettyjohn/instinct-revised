import {ReactNode} from 'react';
import {Children} from '../../../';

export interface NavBarDropdownProps {
  children: Children;
  to: string;
  text: ReactNode;
}
