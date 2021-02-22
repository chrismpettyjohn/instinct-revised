import React, {SyntheticEvent, useState} from 'react';
import {articleService, Icon} from '@instinct-prj/frontend';
import {CreateCommentModalProps} from './CreateCommentModal.types';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

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
      <button className="btn btn-dark" onClick={toggle} type="button">
        Post Comment
      </button>
      {isOpen && (
        <Modal isOpen toggle={toggle}>
          <ModalHeader toggle={toggle}>
            Commenting on <b>{article.title}</b>
          </ModalHeader>
          <ModalBody>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <b>What do you want to say?</b>
                <textarea
                  className="form-control"
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                />
              </div>
            </form>
          </ModalBody>
          <ModalFooter className="text-right">
            <button
              className="btn btn-success"
              disabled={isLoading}
              onClick={onSubmit}
            >
              <Icon type={buttonIcon} />
              {buttonText}
            </button>
          </ModalFooter>
        </Modal>
      )}
    </>
  );
}
