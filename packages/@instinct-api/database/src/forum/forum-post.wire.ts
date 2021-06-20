import {userWire} from '../user/user/user.wire';
import {ForumPost} from '@instinct-prj/interface';
import {ForumPostEntity} from './forum-post.entity';

export function forumPostWire(entity: ForumPostEntity): ForumPost {
  return {
    id: entity.id!,
    sectionID: entity.sectionID,
    title: entity.title,
    body: entity.body,
    user: userWire(entity.user!),
    createdAt: entity.createdAt,
    updatedAt: entity.updatedAt,
  };
}
