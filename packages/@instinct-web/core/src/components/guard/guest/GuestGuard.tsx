import {useContext} from 'react';
import {useLocation} from 'wouter';
import {GuestGuardProps} from './';
import {sessionContext} from '../../../context/session';

export function GuestGuard({children}: GuestGuardProps) {
  const [location, setLocation] = useLocation();
  const {user} = useContext(sessionContext);

  if (user) {
    setLocation('/me');
    return null;
  }

  return children;
}
