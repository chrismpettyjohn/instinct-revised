import {ForumPost} from '@instinct-prj/interface';
import {createFetchHook} from '../fetch-hook.base';
import {forumService} from '../../services/forum/Forum';

export const useFetchForumPosts = (section = -1, refresh = 0) =>
  createFetchHook<ForumPost[]>(() => forumService.getPosts(section), refresh);
