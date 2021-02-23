import React from 'react';
import {
  Column,
  Jumbotron,
  UserLayout,
  PopularRooms as PopularRoomsWidget,
  setURL,
} from '@instinct-web/core';

setURL('rooms', <PopularRooms />);

export function PopularRooms() {
  return (
    <UserLayout section="community_rooms">
      <Jumbotron title="Popular Rooms" />
      <div className="page-content">
        <Column side="left">
          <PopularRoomsWidget />
        </Column>
      </div>
    </UserLayout>
  );
}
