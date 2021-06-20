import React from 'react';
import {Link, useLocation} from 'wouter';
import {Card} from '../components/card/Card';
import {Children, Icon} from '@instinct-web/core';
import {Jumbotron} from '../components/jumbotron/Jumbotron';
import {AdminLayout} from '../components/admin-layout/AdminLayout';

export function EmulatorLayout({children}: {children: Children}) {
  const [location] = useLocation();

  function getHeader() {
    return (
      <ul className="nav nav-tabs">
        <Link to="/admin/emulator/settings">
          <li
            className={
              location === '/admin/emulator/settings'
                ? 'nav-link active'
                : 'nav-link'
            }
            style={{cursor: 'pointer'}}
          >
            <Icon className="mr-0" type="wrench" />
          </li>
        </Link>
        <Link to="/admin/emulator/texts">
          <li
            className={
              location === '/admin/emulator/texts'
                ? 'nav-link active'
                : 'nav-link'
            }
            style={{cursor: 'pointer'}}
          >
            <Icon className="mr-0" type="font" />
          </li>
        </Link>
      </ul>
    );
  }

  return (
    <AdminLayout permission="websiteManageEmulator">
      <Jumbotron style={{background: '#263238'}} title="Emulator Settings">
        <p>
          Here you can update your website and update your SWFs, maintenance,
          etc.
        </p>
      </Jumbotron>
      <div className="page-content">
        <Card header={getHeader()}>{children}</Card>
      </div>
    </AdminLayout>
  );
}
