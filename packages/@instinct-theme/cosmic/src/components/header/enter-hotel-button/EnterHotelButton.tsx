import {Link} from 'wouter';
import './EnterHotelButton.scss';
import {Modal, ModalBody} from 'reactstrap';
import React, {useContext, useEffect, useState} from 'react';
import {configContext, healthContext, sessionContext} from '@instinct-web/core';
import {ClientOption} from './client-option/ClientOption';

export function EnterHotelButton() {
  const {user} = useContext(sessionContext);
  const {config} = useContext(configContext);
  const {health} = useContext(healthContext);
  const [isOpen, setModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setModal(false);
    }
  }, [user?.clientType]);

  function toggle() {
    if (user!.clientType === 'flash') return;
    setModal(_ => !_);
  }

  return (
    <div style={{float: 'right'}}>
      <div className="enter-hotel-button">
        <div className="client-icon" onClick={toggle}>
          <img src={`/img/logo/${user!.clientType}.svg`} />
        </div>
        <div className="client-text">
          <Link href={`/play/${user!.clientType}`}>
            Enter {config.siteName}
            <div style={{fontSize: '.6em'}}>
              {health.usersOnline} users online
            </div>
          </Link>
        </div>
      </div>
      {isOpen && (
        <Modal isOpen style={{maxWidth: 400}} toggle={toggle}>
          <ModalBody className="p-0" style={{overflow: 'hidden'}}>
            <ClientOption title="Nitro" type="nitro">
              <p>A community-built HTML5 client.</p>
            </ClientOption>
            <ClientOption title="Nex Desktop" type="desktop">
              <p>Downloadable client for the Flash lovers</p>
            </ClientOption>
          </ModalBody>
        </Modal>
      )}
    </div>
  );
}
