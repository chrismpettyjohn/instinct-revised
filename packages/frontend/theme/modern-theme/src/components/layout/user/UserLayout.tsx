import {useLocation} from 'wouter';
import Grid from '@material-ui/core/Grid';
import {Header} from '../../header/Header';
import {Footer} from '../../footer/Footer';
import {NavBar} from '../../header/navbar/NavBar';
import {UserLayoutProps} from './UserLayout.types';
import React, {useContext, useEffect} from 'react';
import {sessionContext, UserGuard} from '@instinct-web/core';
import {Sidebar} from '../../sidebar/Sidebar';

export function UserLayout({children, style}: UserLayoutProps) {
  const [location, setLocation] = useLocation();
  const {user} = useContext(sessionContext);

  useEffect(() => {
    if (user === undefined) {
      setLocation('/login');
    }
  }, [user]);

  if (!user) {
    return null;
  }

  return (
    <UserGuard>
      <div className="root" style={{display: 'flex'}}>
        <Sidebar />
      </div>
    </UserGuard>
  );
}
