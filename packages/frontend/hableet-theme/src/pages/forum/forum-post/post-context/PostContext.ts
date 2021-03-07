import {createContext} from 'react';
import {PostContext} from './PostContext.types';
import {exampleForumSection} from '@instinct-prj/interface';

export const postContext = createContext<PostContext>(exampleForumSection);
