import {ReactNode} from 'react';
import {ForumPost} from '@instinct-prj/interface';

export type PostContext = ForumPost;

export interface PostContextProviderProps {
  children: ReactNode;
  defaultPost: ForumPost;
}
