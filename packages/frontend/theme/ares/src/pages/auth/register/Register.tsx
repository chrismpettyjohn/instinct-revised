import './Register.scss';
import {useLocation} from 'wouter';
import ReCAPTCHA from 'react-google-recaptcha';
import React, {useContext, useState} from 'react';
import {GuestLayout} from '../../../components/layout/guest';
import {defaultRegisterState, RegisterState} from './Register.types';
import {
  configContext,
  sessionContext,
  sessionService,
  setURL,
  userService,
} from '@instinct-web/core';

setURL('register', <Register />);

export function Register() {
  const {config} = useContext(configContext);
  const {setUser} = useContext(sessionContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [location, setLocation] = useLocation();
  const [state, setState] = useState<RegisterState>(defaultRegisterState);

  const disabled =
    state.username === '' ||
    state.password === '' ||
    state.password !== state.passwordAgain ||
    state.captcha === '' ||
    (config.siteBeta && state.betaCode === '') ||
    state.showSpinner;

  function onChange<K extends keyof RegisterState>(
    key: K,
    value: RegisterState[K]
  ) {
    setState(_ => ({
      ..._,
      [key]: value,
    }));
  }

  async function onSubmit() {
    try {
      onChange('showSpinner', true);
      onChange('showError', false);
      await userService.create(
        state.username,
        state.password,
        state.email,
        state.captcha!,
        state.betaCode
      );
      const bearer = await sessionService.attemptCredentials(
        state.username,
        state.password
      );
      const user = await sessionService.attemptBearerToken(bearer);
      await setUser(user);
      setLocation('/welcome');
    } catch (e) {
      onChange('showError', true);
    } finally {
      onChange('showSpinner', false);
    }
  }

  return (
    <GuestLayout>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-md-12 col-sm-12 bg-dark p-4">
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
                  required
                />
              </div>
              <div className="form-text">you fucked up</div>
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
            <div className="mb-3">
              <label htmlFor="passwordAgain" className="form-label">
                Password Again
              </label>
              <input
                type="password"
                id="passwordAgain"
                className="form-control p-4"
                onChange={e => onChange('passwordAgain', e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="enail" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control p-4"
                onChange={e => onChange('email', e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <ReCAPTCHA
                sitekey={config.googleRecaptchaClientKey}
                onChange={x => onChange('captcha', x as string)}
              />
            </div>
            <div className="d-inline-flex justify-content-center w-100 mt-2 mb-3">
              <button type="submit" className="btn btn-danger w-25 p-3">
                Register
              </button>
            </div>
          </div>
        </div>
      </form>
    </GuestLayout>
  );
}
