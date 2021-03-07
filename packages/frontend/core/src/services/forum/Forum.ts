import {AxiosResponse} from 'axios';
import {backendAPI} from '../../api';
import {ForumService} from './Forum.types';
import {
  ForumPost,
  ForumSection,
  NewForumPostDTO,
  NewForumSectionDTO,
  UpdateForumPostDTO,
  UpdateForumSectionDTO,
} from '@instinct-prj/interface';

class ForumServiceImplementation implements ForumService {
  async createSection(newSectionDTO: NewForumSectionDTO, sectionID?: number) {
    const newSection: AxiosResponse<ForumSection> = await backendAPI.post(
      `forum/sections${sectionID ? '/' + sectionID : ''}`,
      newSectionDTO
    );
    return newSection.data;
  }
  async getSections(parentSection: number) {
    const sections: AxiosResponse<ForumSection[]> = await backendAPI.get(
      `forum/sections${parentSection > -1 ? '/' + parentSection : ''}`
    );
    return sections.data;
  }
  async getSectionByID(sectionID: number) {
    const sections: AxiosResponse<ForumSection> = await backendAPI.get(
      `forum/sections/${sectionID}`
    );
    return sections.data;
  }
  async updateSection(
    sectionID: number,
    updateSectionDTO: UpdateForumSectionDTO
  ) {
    await backendAPI.post(`forum/sections/${sectionID}`, updateSectionDTO);
  }
  async deleteSection(sectionID: number) {
    await backendAPI.delete(`forum/sections/${sectionID}`);
  }
  async createPost(sectionID: number, newPostDTO: NewForumPostDTO) {
    const newSection: AxiosResponse<ForumPost> = await backendAPI.post(
      `forum/sections/${sectionID}`,
      newPostDTO
    );
    return newSection.data;
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
  async updatePost(
    sectionID: number,
    postID: number,
    updatePostDTO: UpdateForumPostDTO
  ) {
    await backendAPI.post(
      `forum/sections/${sectionID}/posts/{postID}`,
      updatePostDTO
    );
  }
  async deletePost(sectionID: number, postID: number) {
    await backendAPI.delete(`forum/sections/${sectionID}/posts/${postID}`);
  }
}

export const forumService: ForumService = new ForumServiceImplementation();
