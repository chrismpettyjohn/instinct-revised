import {ReactNode} from 'react';

export interface NavTab {
  text: ReactNode;
  children: ReactNode;
}

export interface NavTabsProps {
  tabs: NavTab[];
}
