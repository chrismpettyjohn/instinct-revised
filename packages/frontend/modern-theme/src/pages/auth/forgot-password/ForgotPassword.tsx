import {Link} from 'wouter';
import {FormGroup} from 'reactstrap';
import React, {useState} from 'react';
import {
  defaultForgotPasswordModalState,
  ForgotPasswordModalState,
  Form,
  Icon,
  GuestLayout,
  Input,
  sessionService,
  setURL,
} from '@instinct-prj/frontend';

setURL('forgot-password', <ForgotPassword />);

export function ForgotPassword() {
  const [state, setState] = useState<ForgotPasswordModalState>(
    defaultForgotPasswordModalState
  );

  async function onSubmit() {
    try {
      setState(_ => ({
        ..._,
        showError: false,
        showSpinner: true,
      }));

      await sessionService.generateForgotPasswordToken(state.email);
      setState(_ => ({..._, showCompletion: true}));
    } catch {
      setState(_ => ({
        ..._,
        showError: true,
        showSpinner: false,
      }));
    }
  }

  return (
    <GuestLayout>
      <h1>Forgot Password?</h1>
      {!state.showCompletion ? (
        <Form className="" disabled={state.showSpinner} onSubmit={onSubmit}>
          <p>Please enter your email address.</p>
          <FormGroup>
            <Input
              type="email"
              name="email"
              value={state.email}
              onChange={(key, email) => setState(_ => ({..._, email}))}
            />
          </FormGroup>
          <FormGroup>
            <div className="row">
              <div className="col-6">
                <Link className="forgot-password" to="/login">
                  Back to Login
                </Link>
              </div>
              <div className="col-6 text-right">
                <button
                  className="btn btn-success"
                  disabled={state.showSpinner}
                >
                  {state.showSpinner ? (
                    <Icon className="fa-spin" type="spinner" />
                  ) : (
                    <>Reset Password</>
                  )}
                </button>
              </div>
            </div>
          </FormGroup>
        </Form>
      ) : (
        <p>
          Please check your inbox for an email containing your password reset
          link.
        </p>
      )}
    </GuestLayout>
  );
}
