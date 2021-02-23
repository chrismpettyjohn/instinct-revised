import './Login.scss';
import {FormGroup} from 'reactstrap';
import {Link, useLocation} from 'wouter';
import React, {useContext, useState} from 'react';
import {defaultLoginState, LoginState} from './Login.types';
import {
  configContext,
  Form,
  Icon,
  Input,
  GuestLayout,
  sessionContext,
  sessionService,
  setURL,
} from '@instinct-web/core';

setURL('login', <Login />);

export function Login() {
  const {config} = useContext(configContext);
  const {setUser} = useContext(sessionContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [location, setLocation] = useLocation();
  const [state, setState] = useState<LoginState>(defaultLoginState);

  const disabled =
    state.username === '' || state.password === '' || state.showSpinner;

  function onChange<K extends keyof LoginState>(key: K, value: LoginState[K]) {
    setState(_ => ({
      ..._,
      [key]: value,
    }));
  }

  async function onSubmit() {
    try {
      onChange('showSpinner', true);
      onChange('showError', false);
      const bearer = await sessionService.attemptCredentials(
        state.username!,
        state.password!
      );
      const user = await sessionService.attemptBearerToken(bearer);
      setUser(user);
      setLocation('/me');
    } catch (e) {
      onChange('showError', true);
    } finally {
      onChange('showSpinner', false);
    }
  }

  return (
    <GuestLayout>
      <Form className="" disabled={disabled} onSubmit={onSubmit}>
        {state.showError && (
          <div className="alert-danger p-2 mb-3">
            <b>That is not the right username or password.</b>
          </div>
        )}
        <FormGroup>
          <h3>Username</h3>
          <Input
            type="text"
            name="username"
            value={state.username}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <h3>Password</h3>
          <div style={{marginTop: -10}}>
            <Link className="forgot-password" to="/forgot-password">
              Forgot password?
            </Link>
          </div>
          <Input
            type="password"
            name="password"
            value={state.password}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <button
            className="btn btn-success btn-block"
            disabled={disabled}
            type="submit"
          >
            Login
          </button>
          <hr />
          <Link to="/register">
            <button className="btn btn-dark btn-block">
              {state.showSpinner ? (
                <Icon className="fa-spin" type="spinner" />
              ) : (
                <>Join {config.siteName} for Free!</>
              )}
            </button>
          </Link>
        </FormGroup>
      </Form>
    </GuestLayout>
  );
}
