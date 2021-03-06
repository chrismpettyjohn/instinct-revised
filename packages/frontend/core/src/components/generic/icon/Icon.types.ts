export interface IconProps {
  className?: string;
  family?: 'fas' | 'fa' | 'fab' | 'fad';
  style?: object;
  type: string;
  onClick?: () => void;
}
