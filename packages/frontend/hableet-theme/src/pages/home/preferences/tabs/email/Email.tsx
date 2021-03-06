import React, {useState} from 'react';
import {Form, Icon, Input, sessionService} from '@instinct-web/core';
import {
  EmailPreferencesState,
  defaultEmailPreferencesState,
} from './Email.types';

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
      <div>
        <h4 className="form-subcategory">Current Password</h4>
        <div className="row">
          <div className="column-2">
            <Input
              type="password"
              name="password"
              placeholder="Enter your current password"
              value={state.password}
              onChange={updateField}
            />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h4 className="form-subcategory">New email</h4>
        <div className="row">
          <div className="column-2">
            <Input
              type="text"
              name="email"
              placeholder="Enter your new email"
              value={state.email}
              onChange={updateField}
            />
          </div>
        </div>
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
