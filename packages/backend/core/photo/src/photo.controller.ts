import {PhotoService} from './photo.service';
import {Photo} from '@instinct-prj/interface';
import {Controller, Get, Param} from '@nestjs/common';
import {PhotoEntity, photoWire} from '@instinct-prj/database-api';

@Controller('photos')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  async getAll(): Promise<Photo[]> {
    const photos: PhotoEntity[] = await this.photoService.getAll();
    return photos.map(photo => photoWire(photo));
  }

  @Get(':photoID')
  getByID(@Param('photoID') photo: PhotoEntity): Photo {
    return photoWire(photo);
  }
}
