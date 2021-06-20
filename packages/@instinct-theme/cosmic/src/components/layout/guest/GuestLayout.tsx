import {Card} from '../../card/Card';
import React, {useContext} from 'react';
import {Footer} from '../../footer/Footer';
import {GuestLayoutProps} from './GuestLayout.types';
import {configContext, GuestGuard} from '@instinct-web/core';

export function GuestLayout({
  children,
  section = 'home',
  style,
}: GuestLayoutProps) {
  const {config} = useContext(configContext);
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
                    src={config.logoURL}
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
