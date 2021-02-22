import React from 'react';
import Moment from 'moment';
import {ViewCommentProps} from './ViewComments.types';
import {Card, configContext} from '@instinct-prj/frontend';
import {CommentAuthor} from './comment-author/CommentAuthor';

export function ViewComments({article}: ViewCommentProps) {
  if (article === undefined) {
    return null;
  }

  return (
    <Card header="Comments">
      {article.comments.length === 0 && <p>There are no comments</p>}
      {article.comments.map(_ => (
        <CommentAuthor user={_.author}>
          <div>{_.content}</div>
          <small>Posted {Moment.unix(_.timestamp).format()}</small>
        </CommentAuthor>
      ))}
    </Card>
  );
}
