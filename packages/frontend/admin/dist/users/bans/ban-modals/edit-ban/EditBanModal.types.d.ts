import { UserBan } from '@instinct-prj/interface';
export interface EditBanModalProps {
    ban: UserBan;
    onChange(): void;
}
