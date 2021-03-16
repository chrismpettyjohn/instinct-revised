import {ReactNode} from 'react';
import {ForumSection} from '@instinct-prj/interface';

export type SectionContext = ForumSection;

export interface SectionContextProviderProps {
  children: ReactNode;
  defaultSection: ForumSection;
}
