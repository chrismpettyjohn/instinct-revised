import {UserLayoutProps} from './';
import {useLocation} from 'wouter';
import {Icon} from '../../generic/icon';
import {UserGuard} from '../../guard/user';
import {Footer} from '../../template/footer';
import {NavBar} from '../../template/navbar';
import React, {useContext, useEffect} from 'react';
import {healthContext} from '../../../context/health';
import {sessionContext} from '../../../context/session';
import {EnterHotelButton, Header} from '../../template/header';

export function UserLayout({
  children,
  section = 'home',
  style,
}: UserLayoutProps) {
  const [location, setLocation] = useLocation();
  const {user} = useContext(sessionContext);
  const {health} = useContext(healthContext);

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
        <Header>
          <EnterHotelButton />
          <div
            className="rounded-button"
            style={{
              background: '#001726',
              border: 'none',
              boxShadow: '2px 2px #0F416C',
              color: 'white',
            }}
          >
            {health.usersOnline}
            <Icon className="ml-2" type="user" />
          </div>
        </Header>
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
