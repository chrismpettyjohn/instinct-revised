import React from 'react';
import {AboutModalProps} from './AboutModal.types';
import {Modal, ModalBody, ModalHeader} from 'reactstrap';

export function AboutModal({isOpen, onToggle}: AboutModalProps) {
  return (
    <Modal isOpen={isOpen} toggle={onToggle}>
      <ModalHeader>
        <img src="https://i.imgur.com/Bi8D2aL.png" />
        Instinct 2
      </ModalHeader>
      <ModalBody>
        <h5>About</h5>
        <p>
          Nex runs on a custom content management system exclusive to it;
          Instinct 2.
        </p>
        <p>
          Instinct 2 is a complete overhaul over the original Instinct project.
          It's built to withstand the tests of time with support for Nitro while
          also allowing the more experience to enjoy using Flash through our
          application support.
        </p>
        <h5>Our Technology</h5>
        <ul>
          <li>Custom CMS written in Typescript, React and Node</li>
          <li>PeakRP Browser for our Flash Desktop App</li>
          <li>Nitro for our HTML5 Client</li>
          <li>ArcturusMS for our Emulator</li>
        </ul>
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
