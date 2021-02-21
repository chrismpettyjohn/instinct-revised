import { ReactNode } from 'react';
import { RankDTO } from '@instinct-prj/interface';
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
export declare const defaultRankDTO: RankDTO;
export declare const defaultRankEditorState: RankEditorState;
