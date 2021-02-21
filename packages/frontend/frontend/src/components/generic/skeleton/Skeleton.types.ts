import {CSSProperties, ReactNode} from 'react';

export interface SkeletonProps {
  count?: number;
  duration?: number;
  width?: string | number;
  wrapper?: ReactNode;
  height?: string | number;
  circle?: boolean;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
  isLoading?: boolean;
}
