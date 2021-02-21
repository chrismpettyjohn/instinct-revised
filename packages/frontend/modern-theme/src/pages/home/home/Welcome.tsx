import {Link} from 'wouter';
import {HomePage} from './home-page/HomePage';
import React, {useContext, useState} from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {
  configContext,
  sessionContext,
  setURL,
  UserLayout,
} from '@instinct-prj/frontend';

setURL('welcome', <Welcome />);

export function Welcome() {
  const {user} = useContext(sessionContext);
  const {config} = useContext(configContext);
  const [showModal, setModal] = useState(true);

  function closeModal() {
    setModal(false);
  }

  return (
    <UserLayout>
      <Modal isOpen={showModal} toggle={closeModal}>
        <ModalHeader toggle={closeModal}>
          Welcome to {config.siteName}
        </ModalHeader>
        <ModalBody>
          <h2>Hey {user!.username},</h2>
          <h5>Welcome to {config.siteName}!</h5>
          <p>
            We are so excited to get the chance to give you this opportunity of
            a lifetime to try out our service.
          </p>
          <p>
            During our demo, you may experience bugs,. We ask that you report
            bugs on our Discord channel to ensure prompt updates.
          </p>
          <h3>Quick Links</h3>
          <div className="mt-2">
            <Link to="/community/news">
              <button
                className="btn btn-block btn-danger"
                style={{background: '#b71c1c'}}
              >
                Announcements
              </button>
            </Link>
            <Link to="/community/rules">
              <button
                className="btn btn-block"
                style={{background: '#000B13', color: 'white'}}
              >
                {config.siteName} Rules
              </button>
            </Link>
            <Link to="/play">
              <button
                className="btn btn-block btn-primary"
                style={{background: '#004D40', borderColor: '#009688'}}
              >
                Play Game
              </button>
            </Link>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={closeModal}>
            Continue
          </button>
        </ModalFooter>
      </Modal>
      <HomePage />
    </UserLayout>
  );
}
