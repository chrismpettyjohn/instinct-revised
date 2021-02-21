import {exampleUser, User} from '../user/User';

export interface Room {
  id: number;
  user?: User;
  name: string;
  desc: string;
  currentUsers: number;
  maxUsers: number;
}

export type RoomKeys = keyof Room;

export const exampleRoom: Room = {
  id: 1,
  user: exampleUser,
  name: 'Example Room',
  desc: 'This room is an example',
  currentUsers: 5,
  maxUsers: 20,
};
