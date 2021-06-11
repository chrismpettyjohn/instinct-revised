import {ReactNode} from 'react';

export interface HeaderProps {
  links: HeaderLink[];
}

export interface HeaderLink {
  href: string;
  label: ReactNode;
  children: Omit<HeaderLink, 'children'>[];
}
