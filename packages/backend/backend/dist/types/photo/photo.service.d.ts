import { Repository } from 'typeorm';
import { PhotoEntity } from '../database/photo';
export declare class PhotoService {
    private readonly photoRepository;
    constructor(photoRepository: Repository<PhotoEntity>);
    private readonly eageRelations;
    getAll(): Promise<PhotoEntity[]>;
    getByID(photoID: number): Promise<PhotoEntity>;
}
