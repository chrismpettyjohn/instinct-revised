import {BackgroundColor, Children, PrimaryColor} from '../../';

export interface CardProps {
  bg?: BackgroundColor;
  color?: PrimaryColor;
  className?: string;
  header?: Children;
  children: Children;
  icon?: string;
  style?: object;
}
