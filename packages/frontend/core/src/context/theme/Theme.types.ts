import {ClientType} from '@instinct-prj/interface';

export interface ThemeContext {
  showClient: boolean;
  showFooter: boolean;
  showModalOverlay: boolean;
  setStore: (changes: Partial<ThemeContext>) => void;
}

export const defaultThemeContextInterface: ThemeContext = {
  showClient: false,
  showFooter: true,
  showModalOverlay: true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setStore: (changes: Partial<ThemeContext>) => {},
};
