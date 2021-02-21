import {Children} from '../../';
import {Permissions} from '@instinct-prj/interface';

export interface PermissionGuardProps {
  children: Children;
  permission: keyof Permissions;
  redirect?: boolean;
}
