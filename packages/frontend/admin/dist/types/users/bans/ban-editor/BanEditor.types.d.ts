import { ReactNode } from 'react';
import { User, UserBanDTO } from '@instinct-prj/interface';
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
export declare const defaultBanDTO: UserBanDTO;
export declare const defaultBanEditorState: BanEditorState;
