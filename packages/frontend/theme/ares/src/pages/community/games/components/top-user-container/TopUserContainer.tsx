import React from 'react';
import {Link} from 'wouter';
import {Avatar} from '@instinct-web/core';
import {TopUserContainerProps} from './TopUserContainer.types';

export function TopUserContainer({
  user,
  value,
  altText,
}: TopUserContainerProps) {
  return (
    <Link key={user.id} href={`/profile/${user.username}`}>
      <div className="row top-user-container">
        <div className="col-4">
          <Avatar look={user.figure} headOnly />
        </div>
        <div className="col-8 text-right">
          <h3>{user.username}</h3>
          <h5 style={{marginTop: -10}}>
            <b className="text-primary">
              {Number(user[value]).toLocaleString()}
            </b>{' '}
            {altText ?? value}
          </h5>
        </div>
      </div>
    </Link>
  );
}
