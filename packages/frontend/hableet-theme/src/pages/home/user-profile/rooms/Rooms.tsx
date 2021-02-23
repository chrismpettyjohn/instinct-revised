import React from 'react';
import {UserProfileWidgetProps} from '../';
import {RoomContainer} from './room-container';
import {Card} from '../../../../components/card/Card';

export function Rooms({profile}: UserProfileWidgetProps) {
  return (
    <Card header="Rooms">
      <div className="items-container mt-2">
        {profile?.rooms.length === 0 && (
          <p>{profile?.user.username} doesn't own any rooms</p>
        )}
        {profile?.rooms.map(room => (
          <div className="item-container mb-2" key={room.id}>
            <RoomContainer room={room} />
          </div>
        ))}
      </div>
    </Card>
  );
}
