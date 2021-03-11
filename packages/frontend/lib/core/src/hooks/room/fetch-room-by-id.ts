import {Room} from '@instinct-prj/interface';
import {useEffect, useState} from 'react';
import {roomService} from '../../services/room';

export function useFetchRoomByID(roomID: string): Room | undefined {
  const [room, setRoom] = useState<Room>();

  useEffect(() => {
    setRoom(undefined);
    async function fetchRoom() {
      const roomData = await roomService.getByID(roomID);
      setRoom(roomData);
    }

    fetchRoom();
  }, [roomID]);

  return room;
}
