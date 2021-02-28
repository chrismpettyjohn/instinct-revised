export interface ForumSection {
  id: number;
  parentSection?: ForumSection;
  childSections: ForumSection[];
  title: string;
  description: string;
}

export const exampleForumSection: ForumSection = {
  id: 1,
  parentSection: undefined,
  childSections: [],
  title: 'Announcements',
  description: '',
};
