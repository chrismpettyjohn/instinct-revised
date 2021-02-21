import {Module} from '@nestjs/common';
import {PhotoPipe} from './photo.pipe';
import {PhotoService} from './photo.service';
import {DatabaseModule} from '../database/database.module';
import {PhotoController} from './photo.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [PhotoController],
  providers: [PhotoPipe, PhotoService],
  exports: [PhotoPipe, PhotoService],
})
export class PhotoModule {}
