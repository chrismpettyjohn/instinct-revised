import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {PhotoEntity} from '@instinct-prj/database-api';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(PhotoEntity)
    private readonly photoRepository: Repository<PhotoEntity>
  ) {}

  private readonly eageRelations: Array<keyof PhotoEntity> = ['user'];

  getAll(): Promise<PhotoEntity[]> {
    return this.photoRepository.find({
      relations: this.eageRelations,
    });
  }

  getByID(photoID: number): Promise<PhotoEntity> {
    return this.photoRepository.findOneOrFail({
      where: {
        id: photoID,
      },
      relations: this.eageRelations,
    });
  }
}
