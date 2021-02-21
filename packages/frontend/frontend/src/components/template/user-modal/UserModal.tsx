import {UserModalProps} from './';
import {useLocation} from 'wouter';
import React, {useState} from 'react';
import {Avatar} from '../../generic/avatar';
import {Button} from '../../generic/button';
import {ModalOverlay} from '../../generic/modal/modal-overlay';

export function UserModal({children, user}: UserModalProps) {
  const [location, setLocation] = useLocation();
  const [showModal, setModal] = useState<boolean>(false);

  function toggleModal(): void {
    setModal(!showModal);
    setLocation(`/profile/${user.username}`);
  }

  return (
    <>
      <div onClick={toggleModal} style={{cursor: 'pointer '}}>
        {children}
      </div>
      <ModalOverlay
        header={user.username}
        isOpen={showModal}
        onToggle={toggleModal}
      >
        <div>
          <Avatar look={user.figure} />
          <Button
            color="primary"
            onClick={() => setLocation(`profile/${user.username}`)}
          >
            View Profile
          </Button>
        </div>
      </ModalOverlay>
    </>
  );
}
