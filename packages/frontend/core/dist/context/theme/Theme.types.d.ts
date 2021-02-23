export interface ThemeContext {
    showClient: boolean;
    showFooter: boolean;
    showModalOverlay: boolean;
    setStore: (changes: Partial<ThemeContext>) => void;
}
export declare const defaultThemeContextInterface: ThemeContext;
