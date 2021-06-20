import {userWire} from '../user/user/user.wire';
import {ForumReaction} from '@instinct-prj/interface';
import {ForumReactionEntity} from './forum-reaction.entity';

export function forumReactionWire(entity: ForumReactionEntity): ForumReaction {
  return {
    id: entity.id!,
    postID: entity.postID,
    replyID: entity.replyID,
    user: userWire(entity.user!),
    type: entity.type,
    createdAt: entity.createdAt,
  };
}
