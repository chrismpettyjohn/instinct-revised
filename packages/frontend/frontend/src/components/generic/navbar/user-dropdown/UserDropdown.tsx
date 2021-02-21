import {Link} from 'wouter';
import React, {useContext} from 'react';
import {Avatar, Icon, NavBarChildLink} from '../../';
import {sessionContext} from '../../../../context/session';

export function UserDropdown() {
  const {user} = useContext(sessionContext);

  if (user === undefined) {
    return null;
  }

  return (
    <>
      <Link to={`/profile/${user.username}`} style={{paddingRight: 0}}>
        <div className="account-avatar">
          <Avatar
            look={`${user.figure}&amp;action=std&amp;gesture=std&amp;direction=2&amp;head_direction=2&amp;size=n`}
          />
        </div>
        <span>
          {user.username}
          <Icon className="ml-2" type="caret-down" />
        </span>
      </Link>
      <ul className="navigation-submenu">
        {user.rank?.permissions.websiteShowAdminPanel && (
          <NavBarChildLink to="/admin">Admin Panel</NavBarChildLink>
        )}
        <NavBarChildLink to="/preferences">Account Settings</NavBarChildLink>
        <NavBarChildLink to={`/profile/${user.username}`}>
          My Profile
        </NavBarChildLink>
        <NavBarChildLink to="/logout">Logout</NavBarChildLink>
      </ul>
    </>
  );
}
