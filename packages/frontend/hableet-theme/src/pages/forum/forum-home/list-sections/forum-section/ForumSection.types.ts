import {ForumPost} from '@instinct-prj/interface';

export interface ForumSectionProps {
  title: string;
  icon: string;
  description: string;
  latestPost?: ForumPost;
}
