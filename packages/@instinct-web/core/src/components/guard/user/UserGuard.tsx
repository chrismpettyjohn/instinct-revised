import {useContext} from 'react';
import {UserGuardProps} from './';
import {useLocation} from 'wouter';
import {sessionContext} from '../../../context/session';

export function UserGuard({children, redirect = true}: UserGuardProps) {
  const [location, setLocation] = useLocation();
  const {user} = useContext(sessionContext);

  if (!user) {
    if (redirect) {
      setLocation('/login');
    }

    return null;
  }

  return children;
}
