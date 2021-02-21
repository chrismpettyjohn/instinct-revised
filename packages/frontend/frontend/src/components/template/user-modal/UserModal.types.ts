import {ReactNode} from 'react';
import {User} from '@instinct-prj/interface';

export interface UserModalProps {
  children: ReactNode;
  user: User;
}
