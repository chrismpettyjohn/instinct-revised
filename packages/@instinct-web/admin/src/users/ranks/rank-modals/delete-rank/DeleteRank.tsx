import {toast} from 'react-toastify';
import React, {useState} from 'react';
import {rankService} from '@instinct-web/core';
import {DeleteRankModalProps} from './DeleteRank.types';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

export function DeleteRankModal({
  children,
  rankID,
  rankName,
  onDeletion,
}: DeleteRankModalProps) {
  const [isOpen, setOpen] = useState(false);
  const [spinner, setSpinner] = useState(false);

  function toggle(): void {
    setOpen(_ => !_);
  }

  async function deleteRank() {
    try {
      setSpinner(true);
      await rankService.deleteByID(rankID.toString());
      toast.success(`Rank ${rankName} has been deleted`);
      onDeletion();
    } catch {
      toast.error(`Rank ${rankName} could not be deleted at this time`);
    } finally {
      setSpinner(false);
    }
  }

  return (
    <>
      <div onClick={toggle}>{children}</div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Are you sure?</ModalHeader>
        <ModalBody className="text-center">
          <i className="fa fa-exclamation-triangle fa-3x text-danger" />
          <h3 className="text-uppercase">Warning</h3>
          <h4>
            You're about to delete <b>{rankName}</b>
          </h4>
          <p>This action is irreversible and your changes cannot be undone.</p>
        </ModalBody>
        <ModalFooter>
          <div className="row">
            <div className="col-6">
              <button
                className="btn btn-danger"
                disabled={spinner}
                onClick={deleteRank}
              >
                {spinner ? <i className="fa fa-spinner fa-spin" /> : 'Delete'}
              </button>
            </div>
          </div>
        </ModalFooter>
      </Modal>
    </>
  );
}
