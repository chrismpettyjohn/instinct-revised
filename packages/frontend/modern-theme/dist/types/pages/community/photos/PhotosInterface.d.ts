import { Photo } from '@instinct-prj/interface';
export interface PhotosState {
    photos: Photo[];
    showSpinner: boolean;
}
export declare const defaultPhotosState: PhotosState;
