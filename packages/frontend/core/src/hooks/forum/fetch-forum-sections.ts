import {createFetchHook} from '../fetch-hook.base';
import {ForumSection} from '@instinct-prj/interface';
import {forumService} from '../../services/forum/Forum';

export const useFetchForumSections = (section = -1, refresh = 0) =>
  createFetchHook<ForumSection[]>(
    () => forumService.getSections(section),
    refresh
  );
