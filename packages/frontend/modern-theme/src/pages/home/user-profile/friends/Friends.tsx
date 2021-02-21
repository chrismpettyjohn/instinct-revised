import React from 'react';
import {take} from 'lodash';
import {UserProfileWidgetProps} from '../';
import {Avatar, Card, UserModal} from '@instinct-prj/frontend';

export function Friends({profile}: UserProfileWidgetProps) {
  return (
    <Card header="Friends">
      <div className="items-container">
        {profile?.friends.length === 0 && (
          <p>{profile.user?.username} hasn't added any friends</p>
        )}
        {take(profile?.friends, 5).map(user => (
          <div className="item-container" key={user.id}>
            <UserModal user={user}>
              <Avatar look={user.figure} headOnly />
            </UserModal>
          </div>
        ))}
      </div>
    </Card>
  );
}
