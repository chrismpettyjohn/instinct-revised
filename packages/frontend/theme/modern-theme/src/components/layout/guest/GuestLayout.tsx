import React from 'react';
import {Card} from '../../old/card/Card';
import {Footer} from '../../template/footer/Footer';
import {GuestGuard} from '@instinct-web/core';
import {GuestLayoutProps} from './GuestLayout.types';

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
                    src="/img/logo/regular.png"
                    style={{width: 400}}
                  />
                  <Card style={{minWidth: 450}}>
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
