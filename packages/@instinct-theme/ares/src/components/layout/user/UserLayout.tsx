import {useLocation} from 'wouter';
import './UserLayout.scss';
import {Header} from '../../header/Header';
import {Sidebar} from '../../sidebar/Sidebar';
import {UserLayoutProps} from './UserLayout.types';
import React, {useContext, useEffect} from 'react';
import {sessionContext, UserGuard} from '@instinct-web/core';

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
      <Sidebar />
      <main className="user-layout d-inline-flex flex-column">
        <Header />
        {children}
      </main>
    </UserGuard>
  );
}
