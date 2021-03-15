import React, {SyntheticEvent, useState} from 'react';
import {articleService, Icon} from '@instinct-web/core';
import {CreateCommentModalProps} from './CreateCommentModal.types';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';

export function CreateCommentModal({
  article,
  onCreation,
}: CreateCommentModalProps) {
  const [comment, setComment] = useState('');
  const [isOpen, setModal] = useState(false);
  const [isLoading, setLoading] = useState(false);

  function toggle() {
    setModal(_ => !_);
  }

  async function onSubmit(event: SyntheticEvent) {
    event.preventDefault();
    try {
      setLoading(true);
      const newComment = await articleService.createComment(article.id, {
        content: comment,
      });
      onCreation(newComment);
      setComment('');
      setModal(false);
    } finally {
      setLoading(false);
    }
  }

  const [buttonIcon, buttonText] = isLoading
    ? ['spinner fa-spin', 'Posting Comment...']
    : ['save', 'Post Comment'];

  return (
    <>
      <Button color="primary" variant="contained" onClick={toggle}>
        Post Comment
      </Button>
      {isOpen && (
        <Dialog open onClose={toggle} maxWidth="sm" fullWidth>
          <DialogTitle>Create Comment</DialogTitle>
          <DialogContent dividers>
            <TextField
              label="What do you want to say"
              multiline
              rows={4}
              value={comment}
              variant="outlined"
              onChange={e => setComment(e.target.value)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              color="primary"
              disabled={!comment || isLoading}
              onClick={onSubmit}
            >
              <Icon type={buttonIcon} />
              {buttonText}
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}
