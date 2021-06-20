import './Login.scss';
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
  const [, setLocation] = useLocation();
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
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          id="username"
          onChange={e => onChange('username', e.target.value)}
          required
        />
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          onChange={e => onChange('password', e.target.value)}
          required
        />
        <button
          className="btn btn-danger w-100 mt-2"
          type="submit"
          disabled={disabled}
        >
          Login
        </button>
      </form>
    </GuestLayout>
  );
}
