import {ReactNode} from 'react';
import {RankDTO} from '@instinct-prj/interface';

export interface RankEditorProps {
  children: ReactNode;
  defaultRank?: RankDTO;
  onSave(rank: RankDTO): Promise<void>;
}

export interface RankEditorState {
  rank: RankDTO;
  showModal: boolean;
  showError: boolean;
  showSpinner: boolean;
}

export const defaultRankDTO: RankDTO = {
  name: '',
  badge: 'ADM',
  level: 1,
  websiteAdminClient: false,
  websiteShowStaff: false,
  websiteShowAdminPanel: false,
  websiteManageRanks: false,
  websiteManageUsers: false,
  websiteManageNews: false,
  websiteManageBans: false,
  websiteManageConfig: false,
  websiteManageBetaCodes: false,
  websiteManageGuestbook: false,
  websiteManageEmulator: false,
  websiteManageComments: false,
  users: [],
};

export const defaultRankEditorState: RankEditorState = {
  rank: defaultRankDTO,
  showModal: false,
  showError: false,
  showSpinner: false,
};
