import {Link} from 'wouter';
import './EnterHotelButton.scss';
import {Modal, ModalBody} from 'reactstrap';
import React, {useContext, useState} from 'react';
import {
  ClientType,
  configContext,
  healthContext,
  localStorageService,
  themeContext,
} from '@instinct-web/core';

export function EnterHotelButton() {
  const {config} = useContext(configContext);
  const {health} = useContext(healthContext);
  const token = localStorageService.get('session');
  const {clientType, setStore} = useContext(themeContext);
  const [isOpen, setDropdown] = useState(false);

  function toggle() {
    setDropdown(_ => !_);
  }

  function getStyle(type: ClientType) {
    return type === clientType ? {background: '#001726'} : {};
  }

  function getLink() {
    return clientType === 'nitro' ? (
      <Link href="play">
        Enter {config.siteName}
        <div style={{fontSize: '.6em'}}>{health.usersOnline} users online</div>
      </Link>
    ) : (
      <a href={`nex://${token}`}>
        Enter {config.siteName}
        <div style={{fontSize: '.6em'}}>{health.usersOnline} users online</div>
      </a>
    );
  }

  function onChange(newClientType: ClientType) {
    setStore({clientType: newClientType});
    setDropdown(false);
  }

  return (
    <div style={{float: 'right'}}>
      <div className="enter-hotel-button">
        <div className="client-icon" onClick={toggle}>
          <img src={`/img/logo/${clientType}.svg`} />
        </div>
        <div className="client-text">{getLink()}</div>
      </div>
      {isOpen && (
        <Modal isOpen style={{maxWidth: 400}} toggle={toggle}>
          <ModalBody className="p-0" style={{overflow: 'hidden'}}>
            <div
              className="client-option row"
              style={getStyle('flash')}
              onClick={() => onChange('flash')}
            >
              <div className="col-12">
                <div className="d-flex">
                  <img className="mr-2" src="/img/logo/flash.svg" width={25} />
                  <h4>Nex Desktop</h4>
                </div>
                <p>Desktop client for the flash client.</p>
              </div>
            </div>
            <div
              className="client-option row"
              style={getStyle('nitro')}
              onClick={() => onChange('nitro')}
            >
              <div className="col-12">
                <div className="d-flex">
                  <img className="mr-2" src="/img/logo/nitro.svg" width={25} />
                  <h4>Nitro</h4>
                </div>
                <p>A community-built HTML5 client.</p>
              </div>
            </div>
          </ModalBody>
        </Modal>
      )}
    </div>
  );
}
