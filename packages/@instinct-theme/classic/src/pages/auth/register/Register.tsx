import './Register.scss';
import {Link, useLocation} from 'wouter';
import ReCAPTCHA from 'react-google-recaptcha';
import {GuestLayout} from '../../../components/layout/guest';
import React, {SyntheticEvent, useContext, useState} from 'react';
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

  async function onSubmit(event: SyntheticEvent) {
    event.preventDefault();
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

  return <GuestLayout>Register</GuestLayout>;
}
