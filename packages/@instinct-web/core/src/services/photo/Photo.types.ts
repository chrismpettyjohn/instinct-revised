import {Photo} from '@instinct-prj/interface';

export interface PhotoTypes {
  getAll(): Promise<Photo[]>;

  getByID(photoID: string): Promise<Photo>;
}
