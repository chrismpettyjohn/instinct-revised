import {ReactNode} from 'react';
import {NewForumPostDTO} from '@instinct-prj/interface';

export interface PostWizardProps {
  children: ReactNode;
  header: ReactNode;
  onSubmit(sectionDTO: NewForumPostDTO): void;
}
