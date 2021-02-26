export type ClientType = 'nitro' | 'flash';

export interface ThemeContext {
  showClient: boolean;
  showFooter: boolean;
  showModalOverlay: boolean;
  clientType: ClientType;
  setStore: (changes: Partial<ThemeContext>) => void;
}

export const defaultThemeContextInterface: ThemeContext = {
  showClient: false,
  showFooter: true,
  showModalOverlay: true,
  clientType: 'nitro',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setStore: (changes: Partial<ThemeContext>) => {},
};
