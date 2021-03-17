import React, {useState} from 'react';
import {Form, Icon, sessionService} from '@instinct-web/core';
import {
  EmailPreferencesState,
  defaultEmailPreferencesState,
} from './Email.types';
import {Button, TextField} from '@material-ui/core';

export function EmailPreferences() {
  const [state, setState] = useState<EmailPreferencesState>(
    defaultEmailPreferencesState
  );

  const isDisabled: boolean = !state.email || !state.password;

  function updateField<K extends keyof EmailPreferencesState>(
    key: K,
    value: EmailPreferencesState[K]
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
      await sessionService.updateEmail(state.password, state.email);
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
        <p>
          Your email has been changed to <b>{state.email}</b>!
        </p>
      </div>
    );
  }

  return (
    <Form className="" onSubmit={onSubmit}>
      {state.showError && (
        <div className="alert alert-danger">
          <h4>There was a problem changing your email</h4>
        </div>
      )}
      <TextField
        color="secondary"
        variant="filled"
        label="Current Password"
        placeholder="Enter your password to confirm this change"
        value={state.password}
        onChange={e => updateField('password', e.target.value)}
        fullWidth
      />
      <TextField
        color="secondary"
        variant="filled"
        label="Email Address"
        placeholder="Enter your new email"
        value={state.email}
        onChange={e => updateField('email', e.target.value.toLowerCase())}
        fullWidth
        style={{marginTop: '2.5%'}}
      />
      <div style={{width: '100%', marginTop: '2.5%', textAlign: 'right'}}>
        <Button
          color="primary"
          disabled={isDisabled}
          variant="contained"
          type="submit"
        >
          {state.showSpinner ? 'Saving Changes...' : ' Save Changes'}
        </Button>
      </div>
    </Form>
  );
}
