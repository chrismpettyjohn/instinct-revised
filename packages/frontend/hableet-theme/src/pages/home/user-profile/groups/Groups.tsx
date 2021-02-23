import React from 'react';
import {take} from 'lodash';
import {UserProfileWidgetProps} from '../';
import {GroupContainer} from './group-container';
import {Card} from '../../../../components/card/Card';

export function Groups({profile}: UserProfileWidgetProps) {
  return (
    <Card header="Groups">
      <div className="items-container">
        {profile?.groups.length === 0 && (
          <p>{profile.user?.username} hasn't joined any groups</p>
        )}
        {take(profile?.groups, 5).map(group => (
          <div className="item-container" key={group.id}>
            <GroupContainer group={group} />
          </div>
        ))}
      </div>
    </Card>
  );
}
