import React, {useState} from 'react';
import {DeleteCommentProps} from './DeleteComment.types';
import {articleService, Icon, PermissionGuard} from '@instinct-prj/frontend';

export function DeleteComment({comment, onDelete}: DeleteCommentProps) {
  const [isLoading, setLoading] = useState(false);

  async function onSubmit() {
    try {
      if (isLoading) return;
      setLoading(true);
      await articleService.deleteComment(comment.articleID, comment.id);
      onDelete();
    } finally {
      setLoading(false);
    }
  }

  return (
    <PermissionGuard permission="websiteManageComments" redirect={false}>
      <div
        className="text-danger"
        onClick={onSubmit}
        style={{cursor: 'pointer'}}
      >
        <small>
          <Icon type={!isLoading ? 'trash' : 'spinner fa-spin'} />
          Delete Comment
        </small>
      </div>
    </PermissionGuard>
  );
}
