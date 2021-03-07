import {AxiosResponse} from 'axios';
import {backendAPI} from '../../api';
import {ForumService} from './Forum.types';
import {ForumPost, ForumSection} from '@instinct-prj/interface';

class ForumServiceImplementation implements ForumService {
  async getSections(parentSection: number) {
    const sections: AxiosResponse<ForumSection[]> = await backendAPI.get(
      `forum/sections/${parentSection}`
    );
    return sections.data;
  }
  async getPosts(parentSection: number) {
    const sections: AxiosResponse<ForumPost[]> = await backendAPI.get(
      `forum/sections/${parentSection}/posts`
    );
    return sections.data;
  }
  async getPostByID(parentSection: number, postID: number) {
    const sections: AxiosResponse<ForumPost> = await backendAPI.get(
      `forum/sections/${parentSection}/posts/${postID}`
    );
    return sections.data;
  }
}

export const forumService: ForumService = new ForumServiceImplementation();
