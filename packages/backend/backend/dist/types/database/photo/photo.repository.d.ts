import { Repository } from 'typeorm';
import { PhotoEntity } from './photo.entity';
import { BaseRepository } from '../base.repository';
export declare class PhotoRepository extends BaseRepository<PhotoEntity> {
    constructor(photoRepo: Repository<PhotoEntity>);
}
