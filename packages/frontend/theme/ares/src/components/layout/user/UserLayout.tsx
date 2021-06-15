import {useLocation} from 'wouter';
import {Header} from '../../header/Header';
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
      <Sidebar />
      <main className="'d-inline-flex flex-column">
        <Header />
        {children}
      </main>
    </UserGuard>
  );
}
