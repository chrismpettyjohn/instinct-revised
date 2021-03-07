import {ForumPost} from './ForumPost';

export interface ForumSection {
  id: number;
  parentSection?: ForumSection;
  childSections: ForumSection[];
  title: string;
  icon: string;
  description: string;
  latestPost?: ForumPost;
}

export const exampleForumSection: ForumSection = {
  id: 1,
  parentSection: undefined,
  childSections: [],
  title: 'Announcements',
  icon: '',
  description: '',
  latestPost: undefined,
};
