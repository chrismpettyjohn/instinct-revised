import React from 'react';
import './ModalOverlay.scss';
import {Modal} from 'reactstrap';
import {ModalOverlayProps} from './';

export function ModalOverlay({
  children,
  header,
  isOpen,
  onToggle,
}: ModalOverlayProps) {
  return (
    <Modal className="login-popup" isOpen={isOpen} toggle={onToggle}>
      {header && <h3 className="aside-title">{header}</h3>}
      {isOpen && children}
    </Modal>
  );
}
