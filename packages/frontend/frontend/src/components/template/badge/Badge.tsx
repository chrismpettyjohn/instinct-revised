import {BadgeProps} from './';
import React, {useState} from 'react';
import {ModalOverlay} from '../../generic/modal/modal-overlay';

export function Badge({badge}: BadgeProps) {
  const [isOpen, toggleOpen] = useState<boolean>(false);

  function toggleModal(): void {
    toggleOpen(!isOpen);
  }

  return (
    <>
      <div
        className="item-icon pixelated"
        style={{
          backgroundImage: `url(https://images.projectmeteor.online/c_images/album1584/${badge.code}.gif)`,
          cursor: 'pointer',
          display: 'inline-block',
          width: 50,
          height: 50,
        }}
        onClick={toggleModal}
      />
      <ModalOverlay header={badge.code} isOpen={isOpen} onToggle={toggleModal}>
        <img
          src={`https://images.projectmeteor.online/c_images/album1584/${badge.code}.gif`}
          width={50}
        />
      </ModalOverlay>
    </>
  );
}
