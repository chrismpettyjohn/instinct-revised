import React from 'react';
import {Link, useLocation} from 'wouter';
import {
  AdminLayout,
  AdminLayoutProps,
  Card,
  Container,
  Icon,
  Jumbotron,
  PermissionGuard,
} from '@instinct-web/core';

export function UsersLayout({children, permission}: AdminLayoutProps) {
  const [location] = useLocation();

  function getHeader() {
    return (
      <ul className="nav nav-tabs">
        <PermissionGuard permission={permission} redirect={false}>
          <Link to="/admin/users">
            <li
              className={
                location === '/admin/users' ? 'nav-link active' : 'nav-link'
              }
              style={{cursor: 'pointer'}}
            >
              <Icon className="mr-0" type="users" />
            </li>
          </Link>
        </PermissionGuard>
        <PermissionGuard permission="websiteManageRanks" redirect={false}>
          <Link to="/admin/users/ranks">
            <li
              className={
                location === '/admin/users/ranks'
                  ? 'nav-link active'
                  : 'nav-link'
              }
              style={{cursor: 'pointer'}}
            >
              <Icon className="mr-0" type="users-class" />
            </li>
          </Link>
        </PermissionGuard>
        <PermissionGuard permission="websiteManageBans" redirect={false}>
          <Link to="/admin/users/bans">
            <li
              className={
                location === '/admin/users/bans'
                  ? 'nav-link active'
                  : 'nav-link'
              }
              style={{cursor: 'pointer'}}
            >
              <Icon className="mr-0" type="ban" />
            </li>
          </Link>
        </PermissionGuard>
        <PermissionGuard permission="websiteManageBetaCodes" redirect={false}>
          <Link to="/admin/users/beta-codes">
            <li
              className={
                location === '/admin/users/beta-codes'
                  ? 'nav-link active'
                  : 'nav-link'
              }
              style={{cursor: 'pointer'}}
            >
              <Icon className="mr-0" type="vial" />
            </li>
          </Link>
        </PermissionGuard>
      </ul>
    );
  }

  return (
    <AdminLayout permission="websiteShowAdminPanel">
      <Jumbotron style={{background: '#263238'}} title="Website Settings">
        <p>
          Here you can update your website and update your SWFs, maintenance,
          etc.
        </p>
      </Jumbotron>
      <Container>
        <Card header={getHeader()}>{children}</Card>
      </Container>
    </AdminLayout>
  );
}
