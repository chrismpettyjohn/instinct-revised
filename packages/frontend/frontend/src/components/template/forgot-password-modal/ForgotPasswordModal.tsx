import React, {useState} from 'react';
import {Icon} from '../../generic/icon';
import {Form, Input} from '../../generic/form';
import {sessionService} from '../../../services/session';
import {ModalOverlay} from '../../generic/modal/modal-overlay';
import {
  defaultForgotPasswordModalState,
  ForgotPasswordModalState,
  ForgotPasswordModalProps,
} from './ForgotPasswordModal.types';

export function ForgotPasswordModal({
  isOpen,
  onToggle,
}: ForgotPasswordModalProps) {
  const [state, setState] = useState<ForgotPasswordModalState>(
    defaultForgotPasswordModalState
  );

  function setValue<K extends keyof ForgotPasswordModalState>(
    key: K,
    value: ForgotPasswordModalState[K]
  ): void {
    setState(_ => ({
      ..._,
      [key]: value,
    }));
  }

  async function onSubmit(): Promise<void> {
    setState(_ => ({
      ..._,
      showError: false,
      showSpinner: true,
    }));

    try {
      await sessionService.generateForgotPasswordToken(state.email);
      setValue('showCompletion', true);
    } catch {
      setState(_ => ({
        ..._,
        showError: true,
        showSpinner: false,
      }));
    }
  }

  return (
    <ModalOverlay isOpen={isOpen} onToggle={onToggle} header="Password Reset">
      {state.showCompletion && (
        <div className="text-center">
          <i className="fa fa-thumbs-up fa-3x" />
          <p>
            Please check your inbox for an email containing your password reset
            link.
          </p>
        </div>
      )}
      {!state.showCompletion && (
        <Form className="login-form" onSubmit={onSubmit}>
          {state.showError && (
            <div className="alert-danger">
              Your password could not be reset at this time
            </div>
          )}
          <label className="username-input">
            <Input
              name="email"
              placeholder="Email"
              value={state.email}
              onChange={setValue}
              type="email"
            />
            <Icon type="email" />
          </label>
          <button
            className="rounded-button blue plain"
            type="submit"
            disabled={!state.email}
          >
            Submit
          </button>
        </Form>
      )}
    </ModalOverlay>
  );
}
