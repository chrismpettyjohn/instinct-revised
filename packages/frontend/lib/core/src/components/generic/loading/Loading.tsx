import React from 'react';
import {LoadingProps} from './';
// @ts-ignore - dependency doesn't have types
import LoadingOverlay from 'react-loading-overlay';

export function Loading({
  children,
  isLoading,
  text = 'Loading...',
}: LoadingProps) {
  return (
    <LoadingOverlay active={isLoading} spinner text={text}>
      {children}
    </LoadingOverlay>
  );
}
