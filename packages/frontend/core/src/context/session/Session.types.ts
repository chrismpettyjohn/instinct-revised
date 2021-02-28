import {User} from '@instinct-prj/interface';

export interface SessionContext {
  sso?: string;
  user?: User;
  online: boolean;
  banned: boolean;
  setSSO: (sso: string) => void;
  setUser: (user?: Partial<User>) => void;
  setOnline: (isOnline: boolean) => void;
  setBanned: (banned: boolean) => void;
}

export const defaultSessionContext: SessionContext = {
  sso: undefined,
  user: undefined,
  online: false,
  banned: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setSSO: (sso: string) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setUser: (user?: Partial<User>) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setOnline: (isOnline: boolean) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setBanned: (banned: boolean) => {},
};
