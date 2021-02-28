import {Link} from 'wouter';
import React, {useContext} from 'react';
import {Avatar, Icon, sessionContext} from '@instinct-web/core';

export function UserDropdown() {
  const {user} = useContext(sessionContext);

  console.log(user);

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
          <li className="navigation-subitem">
            <Link to="/admin">Admin Panel</Link>
          </li>
        )}
        <li className="navigation-subitem">
          <Link to="/preferences">Account Settings</Link>
        </li>
        <li className="navigation-subitem">
          <Link to={`/profile/${user.username}`}>My Profile</Link>
        </li>
        <li className="navigation-subitem">
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </>
  );
}
