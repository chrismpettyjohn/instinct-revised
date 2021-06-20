import React from 'react';
import {useLocation} from 'wouter';
import {RoomContainerProps} from './';
import RoomIcon from '../../../../../public/img/icons/room/1.gif';

export function RoomContainer({room}: RoomContainerProps) {
  const [location, setLocation] = useLocation();
  return (
    <img
      alt="room icon"
      src={RoomIcon}
      onClick={() => setLocation(`/rooms/${room.id}`)}
      style={{cursor: 'pointer '}}
    />
  );
}
