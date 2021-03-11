import {AxiosResponse} from 'axios';
import {backendAPI} from '../../api';
import {GuestbookService} from './Guestbook.types';
import {UserGuestbookPost, UserGuestbookPostDTO} from '@instinct-prj/interface';

export class GuestbookServiceImplementation implements GuestbookService {
  async getAllForUser(userID: number) {
    const posts: AxiosResponse<UserGuestbookPost[]> = await backendAPI.get(
      `users/${userID}/guestbook`
    );
    return posts.data;
  }

  async create(userID: number, guestbookDTO: UserGuestbookPostDTO) {
    const newPost: AxiosResponse<UserGuestbookPost> = await backendAPI.post(
      `users/${userID}/guestbook`,
      guestbookDTO
    );
    return newPost.data;
  }

  async update(
    userID: number,
    postID: number,
    guestbookDTO: UserGuestbookPostDTO
  ) {
    const updatedPost: AxiosResponse<UserGuestbookPost> = await backendAPI.patch(
      `users/${userID}/guestbook/${postID}`
    );
    return updatedPost.data;
  }

  async delete(userID: number, postID: number) {
    await backendAPI.delete(`users/${userID}/guestbook/${postID}`);
  }
}
