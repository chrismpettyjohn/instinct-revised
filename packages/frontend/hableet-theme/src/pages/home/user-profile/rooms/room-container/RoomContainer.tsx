import React from 'react';
import {useLocation} from 'wouter';
import {RoomContainerProps} from './';

export function RoomContainer({room}: RoomContainerProps) {
  const [location, setLocation] = useLocation();
  return (
    <img
      alt="room icon"
      src="/img/icons/room/1.gif"
      onClick={() => setLocation(`/rooms/${room.id}`)}
      style={{cursor: 'pointer '}}
    />
  );
}
