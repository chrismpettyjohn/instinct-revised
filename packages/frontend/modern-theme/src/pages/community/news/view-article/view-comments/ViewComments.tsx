import React from 'react';
import Moment from 'moment';
import {Card} from '@instinct-prj/frontend';
import {ViewCommentProps} from './ViewComments.types';
import {CommentAuthor} from './comment-author/CommentAuthor';
import {DeleteComment} from './delete-comment/DeleteComment';
import {CreateCommentModal} from '../create-comment-modal/CreateCommentModal';

export function ViewComments({article, onChange}: ViewCommentProps) {
  return (
    <Card header="Comments">
      {article?.comments?.length === 0 && <p>There are no comments</p>}
      {article?.comments?.map(_ => (
        <CommentAuthor user={_.author}>
          <div>{_.content}</div>
          <small>Posted {Moment.unix(_.timestamp).format('MM/DD/YYYY (hh:mmA)')}</small>
          <DeleteComment comment={_} onDelete={onChange} />
        </CommentAuthor>
      ))}
      <div className="mt-4">
        <CreateCommentModal article={article} onCreation={onChange} />
      </div>
    </Card>
  );
}
