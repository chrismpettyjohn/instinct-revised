import './Login.scss';
import {FormGroup} from 'reactstrap';
import {Link, useLocation} from 'wouter';
import {GuestLayout} from '../../../components/layout/guest';
import React, {SyntheticEvent, useContext, useState} from 'react';
import {defaultLoginState, LoginState} from './Login.types';
import {
  configContext,
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

  async function onSubmit(event: SyntheticEvent) {
    event.preventDefault();
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
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <div id="username-group" className="input-group">
            <img
              className="d-xxl-block d-xl-block d-lg-block d-md-block d-none"
              src=""
            />
            <input
              type="text"
              id="username"
              className="form-control p-4"
              onChange={e => onChange('username', e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control p-4"
            onChange={e => onChange('password', e.target.value)}
            required
          />
        </div>
        <button
          className="btn btn-danger w-100 mt-2"
          type="submit"
          disabled={disabled}
        >
          Login
        </button>
      </form>
      <div className="d-inline-flex justify-content-center mt-4 mt-xl-0 mt-lg-0 pb-3">
        <Link id="register-anchor" href="/register">
          New Around Here? <span className="ml-2 text-danger">Join {config.siteName}</span>
        </Link>
      </div>
    </GuestLayout>
  );
}
