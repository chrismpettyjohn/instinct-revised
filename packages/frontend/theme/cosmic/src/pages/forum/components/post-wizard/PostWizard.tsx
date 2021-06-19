import React, {ChangeEvent, useState} from 'react';
import {PermissionGuard} from '@instinct-web/core';
import {PostWizardProps} from './PostWizard.types';
import {exampleNewForumPostDTO} from '@instinct-prj/interface';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

export function PostWizard({children, header, onSubmit}: PostWizardProps) {
  const [isOpen, setModal] = useState(false);
  const [sectionDTO, setPostDTO] = useState(exampleNewForumPostDTO);

  function onChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setPostDTO(_ => ({
      ..._,
      [event.target.name]: event.target.value,
    }));
  }

  function toggle() {
    setModal(_ => !_);
  }

  function onSubmitChanges() {
    onSubmit(sectionDTO);
    toggle();
  }

  return (
    <>
      <PermissionGuard permission="websiteManageForums" redirect={false}>
        <div onClick={toggle}>{children}</div>
      </PermissionGuard>
      {isOpen && (
        <Modal isOpen toggle={toggle}>
          <ModalHeader togle={toggle}>{header}</ModalHeader>
          <ModalBody>
            <form>
              <div className="form-group">
                <h5>Title</h5>
                <input
                  className="form-control"
                  value={sectionDTO.title}
                  name="title"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <h5>Content</h5>
                <textarea
                  className="form-control"
                  value={sectionDTO.content}
                  name="content"
                  onChange={onChange}
                  rows={12}
                />
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <div className="row w-100">
              <div className="col">
                <button className="btn btn-outline-danger" onClick={toggle}>
                  Cancel
                </button>
              </div>
              <div className="col text-right">
                <button className="btn btn-success" onClick={onSubmitChanges}>
                  Save
                </button>
              </div>
            </div>
          </ModalFooter>
        </Modal>
      )}
    </>
  );
}
