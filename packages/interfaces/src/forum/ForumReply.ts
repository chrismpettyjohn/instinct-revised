import {User} from '../user';
import {ForumReaction} from './ForumReaction';

export interface ForumReply {
  id: number;
  postID: number;
  user: User;
  comment: string;
  createdAt: number;
  reactions: ForumReaction[];
}
