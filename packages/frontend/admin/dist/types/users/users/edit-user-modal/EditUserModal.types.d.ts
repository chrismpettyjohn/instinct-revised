import { InternalUser } from '@instinct-prj/interface';
export interface EditUserModalProps {
    user: InternalUser;
    onUpdated(): Promise<void> | void;
}
