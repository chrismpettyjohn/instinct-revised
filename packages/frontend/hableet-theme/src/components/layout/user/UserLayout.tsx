import {useLocation} from 'wouter';
import {Header} from '../../header/Header';
import {Footer} from '../../footer/Footer';
import {NavBar} from '../../header/navbar/NavBar';
import {UserLayoutProps} from './UserLayout.types';
import React, {useContext, useEffect} from 'react';
import {sessionContext, UserGuard} from '@instinct-web/core';

export function UserLayout({
  children,
  section = 'home',
  style,
}: UserLayoutProps) {
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
      <span className="page-container">
        <Header />
        <NavBar />
        <main>
          <section className="page-container" data-page={section} style={style}>
            {children}
          </section>
        </main>
      </span>
      <Footer />
    </UserGuard>
  );
}
