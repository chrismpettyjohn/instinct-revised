import {createContext} from 'react';
import {SectionContext} from './SectionContext.types';
import {exampleForumSection} from '@instinct-prj/interface';

export const sectionContext = createContext<SectionContext>(
  exampleForumSection
);
