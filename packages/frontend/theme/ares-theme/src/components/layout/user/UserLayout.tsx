import {useLocation} from 'wouter';
import {Header} from '../../template/header/Header';
import {UserLayoutProps} from './UserLayout.types';
import React, {useContext, useEffect} from 'react';
import {Sidebar} from '../../template/sidebar/Sidebar';
import {Footer} from '../../template/sidebar/footer/Footer';
import {sessionContext, UserGuard} from '@instinct-web/core';
import {NavBar} from '../../template/header/navbar/NavBar';

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
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          minWidth: '100%',
          minHeight: '100%',
        }}
      >
        <Sidebar />
        <main className="d-inline-flex flex-column">{children}</main>
        <Footer />
      </div>
    </UserGuard>
  );
}
