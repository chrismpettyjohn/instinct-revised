import React from 'react';
import {AboutModalProps} from './AboutModal.types';
import {Modal, ModalBody, ModalHeader} from 'reactstrap';

export function AboutModal({isOpen, onToggle}: AboutModalProps) {
  return (
    <Modal isOpen={isOpen} toggle={onToggle}>
      <ModalHeader>
        <img src="https://i.imgur.com/Bi8D2aL.png" />
        Instinct
      </ModalHeader>
      <ModalBody>
        <h5>About</h5>
        <p>
          Instinct is a development suite that enables developers to build
          blazing fast, secure, state of the art features.
        </p>
        <h5>What is Jealousy?</h5>
        <p>
          Jealousy is a CMS built with the core libraries of Instinct to ensure
          a smooth and feature rich experience.
        </p>
        <h5>Developed By</h5>
        <p>LeChris</p>
        <iframe
          width={450}
          height={315}
          frameBorder={0}
          allowFullScreen
          src="https://www.youtube.com/embed/bt-IM0XJYOo?autoplay=1&modestbranding=1&rel=0&controls=0&loop=1&autohide=1&start=55"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </ModalBody>
    </Modal>
  );
}
