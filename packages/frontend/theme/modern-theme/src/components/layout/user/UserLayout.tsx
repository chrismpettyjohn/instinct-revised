import {useLocation} from 'wouter';
import {Footer} from '../../template/sidebar/footer/Footer';
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
          <div
            style={{
              paddingLeft: '2.5%',
              paddingRight: '2.5%',
              paddingTop: '1%',
            }}
          >
            <Header />
            <div style={{marginTop: '5%'}}>{children}</div>
          </div>
        </div>
      </div>
    </UserGuard>
  );
}
