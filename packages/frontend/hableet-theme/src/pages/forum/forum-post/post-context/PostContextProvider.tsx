import React from 'react';
import {postContext} from './PostContext';
import {PostContextProviderProps} from './PostContext.types';

export function PostContextProvider({
  children,
  defaultPost,
}: PostContextProviderProps) {
  return (
    <postContext.Provider value={defaultPost}>{children}</postContext.Provider>
  );
}
