import {
  ForumPost,
  ForumSection,
  NewForumPostDTO,
  NewForumSectionDTO,
  UpdateForumPostDTO,
  UpdateForumSectionDTO,
} from '@instinct-prj/interface';

export interface ForumService {
  createSection(newSectionDTO: NewForumSectionDTO): Promise<ForumSection>;
  getSections(parentSection: number): Promise<ForumSection[]>;
  getSectionByID(sectionID: number): Promise<ForumSection>;
  updateSection(
    sectionID: number,
    updateSectionDTO: UpdateForumSectionDTO
  ): Promise<void>;
  deleteSection(sectionID: number): Promise<void>;
  createPost(
    sectionID: number,
    newPostDTO: NewForumPostDTO
  ): Promise<ForumPost>;
  getPosts(parentSection: number): Promise<ForumPost[]>;
  updatePost(
    sectionID: number,
    postID: number,
    updatePostDTO: UpdateForumPostDTO
  ): Promise<void>;
  deletePost(sectionID: number, postID: number): Promise<void>;
  getPostByID(parentSection: number, postID: number): Promise<ForumPost>;
}
