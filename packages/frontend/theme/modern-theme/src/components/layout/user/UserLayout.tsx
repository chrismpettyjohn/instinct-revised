import {useLocation} from 'wouter';
import {Footer} from '../../template/footer/Footer';
import {Header} from '../../template/header/Header';
import {UserLayoutProps} from './UserLayout.types';
import React, {useContext, useEffect} from 'react';
import {Sidebar} from '../../template/sidebar/Sidebar';
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
      <div className="root" style={{display: 'flex'}}>
        <Sidebar />
        <div
          style={{
            width: '100%',
            minHeight: '100%',
            padding: 10,
            position: 'relative',
          }}
        >
          <Header />
          <div style={{padding: '2.5%'}}>{children}</div>
          <Footer />
        </div>
      </div>
    </UserGuard>
  );
}
