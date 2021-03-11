import {createContext} from 'react';
import {PostContext} from './PostContext.types';
import {exampleForumPost} from '@instinct-prj/interface';

export const postContext = createContext<PostContext>(exampleForumPost);
