import {PhotoService} from './photo.service';
import {PhotoEntity} from '@instinct-prj/database-api';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class PhotoPipe implements PipeTransform {
  constructor(private readonly photoService: PhotoService) {}

  async transform(photoID: number): Promise<PhotoEntity> {
    try {
      return await this.photoService.getByID(photoID);
    } catch {
      throw new NotFoundException('Photo does not exist');
    }
  }
}
