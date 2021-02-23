import React from 'react';
import {take} from 'lodash';
import {UserProfileWidgetProps} from '../';
import {Avatar, Card} from '@instinct-web/core';

export function Friends({profile}: UserProfileWidgetProps) {
  return (
    <Card header="Friends">
      <div className="items-container">
        {profile?.friends.length === 0 && (
          <p>{profile.user?.username} hasn't added any friends</p>
        )}
        {take(profile?.friends, 5).map(user => (
          <div className="item-container" key={user.id}>
            <Avatar look={user.figure} headOnly />
          </div>
        ))}
      </div>
    </Card>
  );
}
