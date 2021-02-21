import {useLocation} from 'wouter';
import {toast} from 'react-toastify';
import {Icon} from '../../generic/icon';
import {Loading} from '../../generic/loading';
import ReCAPTCHA from 'react-google-recaptcha';
import {Form, Input} from '../../generic/form';
import React, {useContext, useState} from 'react';
import {userService} from '../../../services/user';
import {configContext} from '../../../context/config';
import {sessionContext} from '../../../context/session';
import {sessionService} from '../../../services/session';
import {ModalButton} from '../../generic/modal/modal-button';
import {RegisterModalState, defaultRegisterModalState} from './';

export function RegisterModal() {
  const {config} = useContext(configContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [location, setLocation] = useLocation();
  const [state, setState] = useState<RegisterModalState>(
    defaultRegisterModalState
  );
  const {setUser} = useContext(sessionContext);

  const disabled: boolean =
    state.username === '' ||
    state.password === '' ||
    state.email === '' ||
    state.password !== state.passwordAgain;

  function setValue<T extends keyof RegisterModalState>(
    key: T,
    value: RegisterModalState[T]
  ): void {
    setState({
      ...state,
      [key]: value,
    });
  }

  async function tryRegister(): Promise<void> {
    try {
      setValue('showSpinner', true);
      await userService.create(
        state.username,
        state.password,
        state.email,
        state.captcha
      );
      const bearer = await sessionService.attemptCredentials(
        state.username,
        state.password
      );
      const user = await sessionService.attemptBearerToken(bearer);
      await setUser(user);
      setLocation('/me');
    } catch {
      toast.error('There was a problem creating your account.');
      setValue('showSpinner', false);
    }
  }

  return (
    <ModalButton button="Register" className="mr-2" header="Create an Account">
      <Loading isLoading={state.showSpinner} text="Creating your account...">
        <Form className="login-form" onSubmit={tryRegister}>
          <label className="username-input">
            <Input
              name="username"
              placeholder="Username"
              value={state.username}
              onChange={setValue}
              type="text"
            />
            <Icon type="user" />
          </label>
          <label className="username-input">
            <Input
              name="email"
              placeholder="Email"
              value={state.email}
              onChange={setValue}
              type="email"
            />
            <Icon type="envelope" />
          </label>
          <label className="password-input">
            <Input
              name="password"
              placeholder="Password"
              value={state.password}
              onChange={setValue}
              type="password"
            />
            <Icon type="lock" />
          </label>
          <label className="password-input">
            <Input
              name="passwordAgain"
              placeholder="Password Again"
              value={state.passwordAgain}
              onChange={setValue}
              type="password"
            />
            <Icon type="lock" />
          </label>
          <div className="row mt-2 mb-2">
            <ReCAPTCHA
              sitekey={config.googleRecaptchaClientKey}
              onChange={x => setValue('captcha', x as string)}
            />
          </div>
          <button
            className="rounded-button blue plain"
            disabled={disabled}
            type="submit"
          >
            Create Account
          </button>
        </Form>
      </Loading>
    </ModalButton>
  );
}
