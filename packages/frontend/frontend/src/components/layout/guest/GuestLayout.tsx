import React from 'react';
import './GuestLayout.scss';
import {GuestLayoutProps} from './';
import {Card} from '../../generic/card';
import {Footer} from '../../template/footer';
import {GuestGuard} from '../../guard/guest';

export function GuestLayout({
  children,
  section = 'home',
  style,
}: GuestLayoutProps) {
  return (
    <GuestGuard>
      <span className="page-container">
        <main>
          <section className="page-content" style={style}>
            <div className="login-page">
              <div className="row">
                <div className="col-12">
                  <img
                    className="header-logo"
                    src="/img/logo/regular.gif"
                    style={{width: '100%'}}
                  />
                  <Card>
                    {children}
                    <br />
                    <br />
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </main>
      </span>
      <Footer />
    </GuestGuard>
  );
}
