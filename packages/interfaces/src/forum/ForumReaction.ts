import {User} from '../user';

export enum ForumReactionType {
  Like = 'like',
  Angry = 'angry',
}

export interface ForumReaction {
  id: number;
  postID?: number;
  replyID?: number;
  user: User;
  type: ForumReactionType;
  createdAt: number;
}
