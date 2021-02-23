import { UserEntity } from '../user/user/user.entity';
import { Photo } from '@instinct-prj/interface';
export declare function photoWire(photoEntity: PhotoEntity): Photo;
export declare class PhotoEntity {
    id?: number;
    userID: number;
    user?: UserEntity;
    roomID: number;
    imagePath: string;
    createdAt: number;
}
