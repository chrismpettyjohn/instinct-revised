import React, {ChangeEvent, useState} from 'react';
import {Icon, PermissionGuard} from '@instinct-web/core';
import {SectionWizardProps} from './SectionWizard.types';
import {exampleNewForumSectionDTO} from '@instinct-prj/interface';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

export function SectionWizard({
  children,
  header,
  onSubmit,
}: SectionWizardProps) {
  const [isOpen, setModal] = useState(false);
  const [sectionDTO, setSectionDTO] = useState(exampleNewForumSectionDTO);

  function onChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setSectionDTO(_ => ({
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
                <h5>Icon</h5>
                <p>
                  You can find the names of icons{' '}
                  <a
                    href="https://fontawesome.com/icons?d=gallery&q=i"
                    target="_blank"
                  >
                    here
                  </a>
                  . Please use just the name and exclude the <i>fa fa-</i>{' '}
                  portion
                </p>
                <div className="d-flex w-100">
                  <div className="bg-dark p-2" style={{minWidth: 35}}>
                    <Icon type={sectionDTO.icon} style={{fontSize: 25}} />
                  </div>
                  <input
                    className="form-control p-4"
                    value={sectionDTO.icon}
                    name="icon"
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <h5>Description</h5>
                <textarea
                  className="form-control"
                  value={sectionDTO.description}
                  name="description"
                  onChange={onChange}
                  rows={8}
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
