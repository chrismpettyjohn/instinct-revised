import {Link} from 'wouter';
import {parse} from 'query-string';
import React, {useState} from 'react';
import {
  RedeemForgotPasswordState,
  defaultForgotPasswordState,
} from './RedeemForgotPassword.types';
import {
  Card,
  Form,
  GuestLayout,
  Icon,
  Input,
  sessionService,
  setURL,
} from '@instinct-web/core';

setURL('forgot-password/redeem', <RedeemForgotPassword />);

export function RedeemForgotPassword() {
  const [state, setState] = useState<RedeemForgotPasswordState>(
    defaultForgotPasswordState
  );

  // eslint-disable-next-line no-restricted-globals
  const params: {token?: string} = parse(location.search);
  const isDisabled = !state.password || !state.passwordAgain;

  function updateField<K extends keyof RedeemForgotPasswordState>(
    key: K,
    value: RedeemForgotPasswordState[K]
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
      await sessionService.redeemForgotPasswordToken(
        params.token!,
        state.password,
        state.passwordAgain
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
      <GuestLayout>
        <div className="page-content">
          <Card header="Password Reset">
            <div className="text-center">
              <i className="fa fa-thumbs-up fa-3x" />
              <p>Your password has been reset</p>
              <Link to="/login">
                <button className="btn btn-light">Login</button>
              </Link>
            </div>
          </Card>
        </div>
      </GuestLayout>
    );
  }

  return (
    <GuestLayout>
      <div className="page-content">
        <Card header="Password Reset">
          {!params.token && (
            <div className="text-center">
              <i className="fa fa-exclamation-circle fa-3x" />
              <p>Invalid reset link. Please generate a new one.</p>
            </div>
          )}
          {params.token && (
            <Form className="" onSubmit={onSubmit}>
              {state.showError && (
                <div className="alert alert-danger">
                  <h4>There was a problem changing your password</h4>
                </div>
              )}
              <div className="mt-5">
                <h4 className="form-subcategory">New Password</h4>
                <div className="row">
                  <div className="column-2">
                    <Input
                      type="password"
                      name="password"
                      placeholder="Enter your new password"
                      value={state.password}
                      onChange={updateField}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <h4 className="form-subcategory">New Password Again</h4>
                <div className="row">
                  <div className="column-2">
                    <Input
                      type="password"
                      name="passwordAgain"
                      placeholder="Enter your new password again"
                      value={state.passwordAgain}
                      onChange={updateField}
                    />
                  </div>
                </div>
              </div>

              <div className="form-help">
                <p>
                  You must use at least 6 characters. We also recommend you to
                  combine numbers and symbols for strong password protection.
                </p>
              </div>
              <div className="submit-button">
                <button
                  className="rounded-button grey"
                  disabled={isDisabled}
                  type="submit"
                >
                  {state.showSpinner ? (
                    <Icon className="fa-spin" type="spinner" />
                  ) : (
                    'Save'
                  )}
                </button>
              </div>
            </Form>
          )}
        </Card>
      </div>
    </GuestLayout>
  );
}
