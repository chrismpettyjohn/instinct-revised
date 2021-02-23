import { UserEntity } from '../user/user/user.entity';
import { RoomEntity } from '../room/room.entity';
export declare class GroupEntity {
    id?: number;
    userID: number;
    user?: UserEntity;
    name: string;
    description: string;
    roomID: number;
    room?: RoomEntity;
    state: number;
    badge: string;
    dateCreated: number;
    members?: UserEntity[];
}
