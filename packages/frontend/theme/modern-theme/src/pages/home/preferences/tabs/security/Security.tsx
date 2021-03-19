import React, {useState} from 'react';
import {Form, Icon, Input, sessionService} from '@instinct-web/core';
import {defaultSecurityPreferencesState, SecurityPreferencesState} from './';
import {Button, TextField} from '@material-ui/core';

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
      <TextField
        color="secondary"
        variant="filled"
        label="Current Password"
        placeholder="Enter your current password for verification"
        value={state.currentPassword}
        onChange={e => updateField('currentPassword', e.target.value)}
        fullWidth
        style={{marginTop: '2.5%'}}
      />
      <TextField
        color="secondary"
        variant="filled"
        label="New Password"
        placeholder="Enter your new password"
        value={state.newPasswordAgain}
        onChange={e => updateField('newPassword', e.target.value)}
        fullWidth
        style={{marginTop: '2.5%'}}
      />
      <TextField
        color="secondary"
        variant="filled"
        label="New Password Again"
        placeholder="Enter your new password again"
        value={state.newPasswordAgain}
        onChange={e => updateField('newPasswordAgain', e.target.value)}
        fullWidth
        style={{marginTop: '2.5%'}}
      />
      <div style={{width: '100%', marginTop: '2.5%', textAlign: 'right'}}>
        <Button color="primary" variant="contained" type="submit">
          {state.showSpinner ? 'Saving Changes...' : ' Save Changes'}
        </Button>
      </div>
    </Form>
  );
}
