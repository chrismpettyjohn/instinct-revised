import {toast} from 'react-toastify';
import React, {useState} from 'react';
import {banService} from '@instinct-web/core';
import {DeleteBanModalProps} from './DeleteBan.types';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

export function DeleteBanModal({
  ban,
  children,
  onDeletion,
}: DeleteBanModalProps) {
  const [isOpen, setOpen] = useState(false);
  const [spinner, setSpinner] = useState(false);

  function toggle(): void {
    setOpen(_ => !_);
  }

  async function deleteBan() {
    try {
      setSpinner(true);
      await banService.deleteByID(ban.id.toString());
      toast.success(`${ban.user.username} has been unbanned`);
      onDeletion();
    } catch {
      toast.error(`${ban.user.username} could not be unbanned at this time`);
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
            You're about to unban <b>{ban.user.username}</b>
          </h4>
          <p>This action is irreversible and your changes cannot be undone.</p>
        </ModalBody>
        <ModalFooter>
          <div className="row">
            <div className="col-6">
              <button
                className="btn btn-danger"
                disabled={spinner}
                onClick={deleteBan}
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
