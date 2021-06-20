import React from 'react';
import {Header} from './header/Header';
import {Footer} from './footer/Footer';
import {PermissionGuard} from '@instinct-web/core';
import {AdminLayoutProps} from './AdminLayout.types';

export function AdminLayout({children, permission}: AdminLayoutProps) {
  return (
    <PermissionGuard permission={permission}>
      <span className="page-container">
        <Header />
        <main>
          <section className="page-container">{children}</section>
        </main>
      </span>
      <Footer />
    </PermissionGuard>
  );
}
