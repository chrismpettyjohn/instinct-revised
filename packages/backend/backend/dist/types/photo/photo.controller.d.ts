import { PhotoService } from './photo.service';
import { Photo } from '@instinct-prj/interface';
import { PhotoEntity } from '../database/photo';
export declare class PhotoController {
    private readonly photoService;
    constructor(photoService: PhotoService);
    getAll(): Promise<Photo[]>;
    getByID(photo: PhotoEntity): Photo;
}
