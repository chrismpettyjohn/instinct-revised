export type BackgroundColor =
  | 'dark'
  | 'light'
  | 'primary'
  | 'secondary'
  | 'info'
  | 'danger';
export type PrimaryColor = 'white' | 'black';
export type Children = any;

export interface ComponentProps {
  children: Children;
}
