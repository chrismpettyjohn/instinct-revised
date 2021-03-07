import {ForumPost, ForumSection} from '@instinct-prj/interface';

export interface ForumService {
  getSections(parentSection: number): Promise<ForumSection[]>;
  getPosts(parentSection: number): Promise<ForumPost[]>;
  getPostByID(parentSection: number, postID: number): Promise<ForumPost>;
}
