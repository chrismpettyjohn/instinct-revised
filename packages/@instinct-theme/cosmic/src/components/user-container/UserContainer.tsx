import {Link} from 'wouter';
import React from 'react';
import './UserContainer.scss';
import {UserContainerProps} from './';
import {Avatar} from '@instinct-web/core';

export function UserContainer({user}: UserContainerProps) {
  return (
    <div className="member-container">
      <Link href={`/profile/${user.username}`}>
        <div className="member-content flex-container flex-vertical-center">
          <div
            className="member-avatar flex-container flex-vertical-center flex-horizontal-center"
            style={{overflow: 'hidden'}}
          >
            <Avatar look={user.figure} />
          </div>
          <div className="member-details">
            <div className="details-username">{user.username}</div>
            <div className="details-motto">{user.motto}</div>
          </div>
          <div className="member-status flex-container flex-vertical-center flex-horizontal-center">
            <span
              className={user.online ? 'status-icon bg-success' : 'status-icon'}
              title={user.online ? 'Online' : 'Offline'}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
