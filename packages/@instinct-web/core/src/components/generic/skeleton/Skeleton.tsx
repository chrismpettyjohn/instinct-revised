import React from 'react';
import {SkeletonProps} from './Skeleton.types';
import SkeletonBase from 'react-loading-skeleton';

export function Skeleton(props: SkeletonProps) {
  if (props.isLoading || props.children === undefined) {
    return <SkeletonBase {...props} />;
  }

  return <>{props.children}</>;
}
