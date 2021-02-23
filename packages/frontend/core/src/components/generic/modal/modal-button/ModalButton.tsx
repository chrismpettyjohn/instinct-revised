import React, {useState} from 'react';
import {Button, ModalOverlay} from '../../';
import {ModalButtonProps, ModalButtonState, defaultModalButtonState} from './';

export function ModalButton({
  button,
  children,
  className = '',
  header,
  style,
}: ModalButtonProps) {
  const [state, setState] = useState<ModalButtonState>(defaultModalButtonState);

  function onToggle(): void {
    setState({
      showModal: !state.showModal,
    });
  }

  return (
    <>
      <Button
        className={`rounded-button white plain ${className}`}
        onClick={onToggle}
        style={style}
      >
        {button}
      </Button>
      <ModalOverlay
        header={header}
        isOpen={state.showModal}
        onToggle={onToggle}
      >
        {children}
      </ModalOverlay>
    </>
  );
}
