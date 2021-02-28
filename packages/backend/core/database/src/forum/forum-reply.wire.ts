import {userWire} from '../user/user/user.wire';
import {ForumReply} from '@instinct-prj/interface';
import {ForumReplyEntity} from './forum-reply.entity';
import {forumReactionWire} from './forum-reaction.wire';

export function forumReplyWire(entity: ForumReplyEntity): ForumReply {
  return {
    id: entity.id!,
    postID: entity.postID,
    user: userWire(entity.user!),
    comment: entity.content,
    createdAt: entity.createdAt,
    reactions: entity.reactions!.map(_ => forumReactionWire(_)),
  };
}
