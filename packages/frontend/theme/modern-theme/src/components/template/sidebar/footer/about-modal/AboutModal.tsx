import React, {useContext} from 'react';
import {configContext} from '@instinct-web/core';
import {AboutModalProps} from './AboutModal.types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Typography,
} from '@material-ui/core';
import {ModalBody} from 'reactstrap';

export function AboutModal({isOpen, onToggle}: AboutModalProps) {
  const {config} = useContext(configContext);

  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open onClose={onToggle}>
      <DialogTitle id="alert-dialog-title">Instinct 2</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Developed by{' '}
          <a
            href="https://github.com/chrismpettyjohn/instinct-revised/"
            target="_blank"
            style={{textDecoration: 'none'}}
          >
            LeChris
          </a>{' '}
          with design inspired by{' '}
          <a
            href="https://dribbble.com/therealwalim"
            target="_blank"
            style={{textDecoration: 'none'}}
          >
            Walim
          </a>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
