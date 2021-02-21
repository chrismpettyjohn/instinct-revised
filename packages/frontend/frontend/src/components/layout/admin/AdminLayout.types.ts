import {ReactNode} from 'react';
import {Permissions} from '@instinct-prj/interface';

export interface AdminLayoutProps {
  children: ReactNode;
  permission: keyof Permissions;
}
