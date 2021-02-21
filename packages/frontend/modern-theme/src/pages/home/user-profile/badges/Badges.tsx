import React from 'react';
import {take} from 'lodash';
import {UserProfileWidgetProps} from '../';
import {Badge, Card} from '@instinct-prj/frontend';

export function Badges({profile}: UserProfileWidgetProps) {
  return (
    <Card header="Badges">
      <div className="items-container">
        {profile?.badges.length === 0 && (
          <p>{profile.user?.username} doesn't have any badges</p>
        )}
        {take(profile?.badges, 5).map(badge => (
          <div className="item-container" key={badge.id}>
            <Badge badge={badge} />
          </div>
        ))}
      </div>
    </Card>
  );
}
