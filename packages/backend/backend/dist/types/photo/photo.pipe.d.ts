import { PhotoService } from './photo.service';
import { PhotoEntity } from '../database';
import { PipeTransform } from '@nestjs/common';
export declare class PhotoPipe implements PipeTransform {
    private readonly photoService;
    constructor(photoService: PhotoService);
    transform(photoID: number): Promise<PhotoEntity>;
}
