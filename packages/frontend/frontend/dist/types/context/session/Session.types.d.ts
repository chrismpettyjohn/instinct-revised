import { User } from '@instinct-prj/interface';
export interface SessionContext {
    sso?: string;
    user?: User;
    online: boolean;
    banned: boolean;
    setSSO: (sso: string) => void;
    setUser: (user?: User) => void;
    setOnline: (isOnline: boolean) => void;
    setBanned: (banned: boolean) => void;
}
export declare const defaultSessionContext: SessionContext;
