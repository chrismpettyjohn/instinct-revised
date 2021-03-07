import {ReactNode} from 'react';
import {NewForumSectionDTO} from '@instinct-prj/interface';

export interface SectionWizardProps {
  children: ReactNode;
  header: ReactNode;
  onSubmit(sectionDTO: NewForumSectionDTO): void;
}
