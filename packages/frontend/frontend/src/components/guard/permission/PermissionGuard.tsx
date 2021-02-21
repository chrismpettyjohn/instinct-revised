import {useContext} from 'react';
import {useLocation} from 'wouter';
import {PermissionGuardProps} from './';
import {sessionContext} from '../../../context/session';

export function PermissionGuard({
  children,
  permission,
  redirect = true,
}: PermissionGuardProps) {
  const [location, setLocation] = useLocation();
  const {user} = useContext(sessionContext);
  const hasPermission = !!user?.rank?.permissions[permission];

  if (!hasPermission) {
    if (redirect) {
      setLocation(user ? '/me' : '/login');
    }

    return null;
  }

  return children;
}
