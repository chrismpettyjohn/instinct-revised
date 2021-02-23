import React from 'react';
import {UserDropdown, NavBarLink, PermissionGuard} from '@instinct-web/core';

export function AdminNavBar() {
  return (
    <nav className="navigation-container">
      <ul
        className="navigation-menu flex-container"
        style={{width: '100%', maxWidth: 1055, margin: '0 auto'}}
      >
        <NavBarLink to="/me">Back to Site</NavBarLink>
        <NavBarLink to="/admin">Dashboard</NavBarLink>
        <PermissionGuard permission="websiteManageEmulator" redirect={false}>
          <NavBarLink to="/admin/emulator/settings">Emulator</NavBarLink>
        </PermissionGuard>
        <PermissionGuard permission="websiteManageConfig" redirect={false}>
          <NavBarLink to="/admin/website">Website</NavBarLink>
        </PermissionGuard>
        <PermissionGuard permission="websiteManageNews" redirect={false}>
          <NavBarLink to="/admin/news/articles">News</NavBarLink>
        </PermissionGuard>
        <PermissionGuard permission="websiteManageUsers" redirect={false}>
          <NavBarLink to="/admin/users">Users</NavBarLink>
        </PermissionGuard>
        <li className="navigation-item navigation-right-side-item has-items">
          <UserDropdown />
        </li>
      </ul>
    </nav>
  );
}
