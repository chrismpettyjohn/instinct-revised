import {PhotoTypes} from './';
import {AxiosResponse} from 'axios';
import {backendAPI} from '../../api';
import {Photo} from '@instinct-prj/interface';

class PhotoService implements PhotoTypes {
  async getAll() {
    const photos: AxiosResponse<Photo[]> = await backendAPI.get('photos');
    return photos.data;
  }

  async getByID(photoID: string) {
    const photo: AxiosResponse<Photo> = await backendAPI.get(
      `photos/${photoID}`
    );
    return photo.data;
  }
}

export const photoService: PhotoTypes = new PhotoService();
