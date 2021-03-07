import React, {useContext} from 'react';
import {postContext} from '../post-context/PostContext';
import {MiniJumbotron} from '../../../../components/mini-jumbotron/MiniJumbotron';

export function PostHeader() {
  const {title} = useContext(postContext);
  return (
    <MiniJumbotron>
      <h1>{title}</h1>
    </MiniJumbotron>
  );
}
