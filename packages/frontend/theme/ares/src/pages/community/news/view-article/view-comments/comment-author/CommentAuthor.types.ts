import {ReactNode} from 'react';
import {User} from '@instinct-prj/interface';

export interface CommentAuthorProps {
  user: User;
  children: ReactNode;
}
