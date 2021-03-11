import React, {useState} from 'react';
import {PreviewImageProps} from './PreviewImage.types';
import {Modal, ModalBody, ModalHeader} from 'reactstrap';

export function PreviewImage({
  className = '',
  children,
  image,
  style,
}: PreviewImageProps) {
  const [showModal, setModal] = useState(false);

  function toggleModal(): void {
    setModal(_ => !_);
  }

  const defaultChild = (
    <span className={`text-warning ${className}`} onClick={toggleModal}>
      Preview
    </span>
  );

  return (
    <>
      {children ?? defaultChild}
      <Modal isOpen={showModal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Image Preview</ModalHeader>
        <ModalBody>
          <img alt="preview" src={image} style={{width: '100%', ...style}} />
        </ModalBody>
      </Modal>
    </>
  );
}
