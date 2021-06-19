import React, {useState} from 'react';
import {Form, Icon, Input, sessionService} from '@instinct-web/core';
import {defaultSecurityPreferencesState, SecurityPreferencesState} from './';

export function SecurityPreferences() {
  const [state, setState] = useState<SecurityPreferencesState>(
    defaultSecurityPreferencesState
  );

  const isDisabled: boolean =
    state.currentPassword === '' ||
    state.newPassword === '' ||
    state.newPassword !== state.newPasswordAgain ||
    state.showSpinner;

  function updateField<K extends keyof SecurityPreferencesState>(
    key: K,
    value: SecurityPreferencesState[K]
  ): void {
    setState({
      ...state,
      [key]: value,
    });
  }
  async function onSubmit(): Promise<void> {
    setState(_ => ({
      ..._,
      showError: false,
      showSpinner: true,
    }));

    try {
      await sessionService.updatePassword(
        state.currentPassword,
        state.newPassword,
        state.newPasswordAgain
      );
      updateField('showCompletion', true);
    } catch {
      setState(_ => ({
        ..._,
        showError: true,
        showSpinner: false,
      }));
    }
  }

  if (state.showCompletion) {
    return (
      <div className="text-center">
        <i className="fa fa-thumbs-up fa-5x" />
        <p>Your password has been updated!</p>
      </div>
    );
  }

  return (
    <Form className="" onSubmit={onSubmit}>
      {state.showError && (
        <div className="alert alert-danger">
          <h4>There was a problem changing your password</h4>
        </div>
      )}
      <div>
        <h4 className="form-subcategory">Current Password</h4>
        <div className="row">
          <div className="column-2">
            <Input
              type="password"
              name="currentPassword"
              placeholder="Enter your current password"
              value={state.currentPassword}
              onChange={updateField}
            />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h4 className="form-subcategory">New Password</h4>
        <div className="row">
          <div className="column-2">
            <Input
              type="password"
              name="newPassword"
              placeholder="Enter your new password"
              value={state.newPassword}
              onChange={updateField}
            />
          </div>
          <div className="column-2">
            <Input
              type="password"
              name="newPasswordAgain"
              placeholder="Enter your new password again"
              value={state.newPasswordAgain}
              onChange={updateField}
            />
          </div>
        </div>
      </div>
      <div className="form-help">
        <p>
          You must use at least 6 characters. We also recommend you to combine
          numbers and symbols for strong password protection.
        </p>
      </div>
      <div className="mt-4 text-right">
        <button className="btn btn-primary" disabled={isDisabled} type="submit">
          {state.showSpinner ? (
            <Icon className="fa-spin" type="spinner" />
          ) : (
            'Save Changes'
          )}
        </button>
      </div>
    </Form>
  );
}
