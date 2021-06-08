import {User} from '@instinct-prj/interface';

export interface TopUserContainerProps {
  user: User;
  value: keyof User;
  altText?: string;
}
