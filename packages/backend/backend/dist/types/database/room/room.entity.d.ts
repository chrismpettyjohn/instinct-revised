import { UserEntity } from '../user/user/user.entity';
export declare class RoomEntity {
    id?: number;
    ownerID: number;
    owner?: UserEntity;
    ownerName: string;
    name: string;
    description: string;
    model: string;
    password: string;
    users: number;
    usersMax: number;
}
