import {Module} from '@nestjs/common';
import {PhotoPipe} from './photo.pipe';
import {PhotoService} from './photo.service';
import {PhotoController} from './photo.controller';
import {DatabaseModule} from '@instinct-prj/database-api';

@Module({
  imports: [DatabaseModule],
  controllers: [PhotoController],
  providers: [PhotoPipe, PhotoService],
  exports: [PhotoPipe, PhotoService],
})
export class PhotoModule {}
