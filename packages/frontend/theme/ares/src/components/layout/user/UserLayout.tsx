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
      <div className="user-layout">
        <Sidebar />
        <main className="d-inline-flex flex-column bg-danger">
          <Header />
          {children}
        </main>
      </div>
    </UserGuard>
  );
}
