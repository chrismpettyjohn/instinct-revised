import {ReactNode} from 'react';
import {User, UserBanDTO} from '@instinct-prj/interface';

export interface BanEditorProps {
  children: ReactNode;
  defaultBan?: UserBanDTO;
  onSave(rank: UserBanDTO): Promise<void>;
}

export interface BanEditorState {
  ban: UserBanDTO;
  user?: User;
  showModal: boolean;
  showError: boolean;
  showSpinner: boolean;
}

export const defaultBanDTO: UserBanDTO = {
  userID: 0,
  reason: '',
  banStart: 0,
  banEnd: 0,
};

export const defaultBanEditorState: BanEditorState = {
  ban: defaultBanDTO,
  user: undefined,
  showModal: false,
  showError: false,
  showSpinner: false,
};
