import {ForumPost} from '@instinct-prj/interface';
import {createFetchHook} from '../fetch-hook.base';
import {forumService} from '../../services/forum/Forum';

export const useFetchForumPosts = (section = -1, refresh = 0) =>
  createFetchHook<ForumPost[]>(
    () => forumService.getPosts(section),
    section + refresh
  );

export const useFetchForumPostByID = (
  section: number,
  postID: number,
  refresh = 0
) =>
  createFetchHook<ForumPost>(
    () => forumService.getPostByID(section, postID),
    section + postID + refresh
  );
