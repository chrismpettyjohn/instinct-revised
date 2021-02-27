import React, {useContext, useState} from 'react';
import {Modal, ModalBody, ModalHeader} from 'reactstrap';
import {
  configContext,
  sessionContext,
  useRenewSessionSSO,
} from '@instinct-web/core';

export function CopySSOModal() {
  useRenewSessionSSO();
  const {sso} = useContext(sessionContext);
  const {config} = useContext(configContext);
  const [isOpen, setModal] = useState(false);

  function toggle() {
    setModal(_ => !_);
  }

  return (
    <>
      <button className="btn btn-info" onClick={toggle}>
        Copy Auth Token
      </button>
      {isOpen && (
        <Modal isOpen toggle={toggle}>
          <ModalHeader toggle={toggle}>Here's Your AuthToken</ModalHeader>
          <ModalBody>
            <p>
              Please copy the token in the box below into your {config.siteName}{' '}
              Browser
            </p>
            <input className="form-control" value={sso} readOnly />
          </ModalBody>
        </Modal>
      )}
    </>
  );
}
