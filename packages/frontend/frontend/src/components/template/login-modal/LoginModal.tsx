import {Form} from '../../generic/form';
import {useLocation, Link} from 'wouter';
import {Input} from '../../generic/form';
import {Icon} from '../../generic/icon';
import {Loading} from '../../generic/loading';
import React, {useContext, useState} from 'react';
import {sessionContext} from '../../../context/session';
import {sessionService} from '../../../services/session';
import {LoginModalState, defaultLoginModalState} from './';
import {ModalButton} from '../../generic/modal/modal-button';

export function LoginModal() {
  const [location, setLocation] = useLocation();
  const {setUser} = useContext(sessionContext);
  const [state, setState] = useState<LoginModalState>(defaultLoginModalState);

  function setValue<T extends keyof LoginModalState>(
    key: T,
    value: LoginModalState[T]
  ): void {
    setState(_ => ({
      ..._,
      error: key === 'showSpinner' ? _.error : undefined,
      [key]: value,
    }));
  }

  async function tryLogin(): Promise<void> {
    try {
      setValue('showSpinner', true);
      const bearer = await sessionService.attemptCredentials(
        state.username!,
        state.password!
      );
      const user = await sessionService.attemptBearerToken(bearer);
      setUser(user);
      setLocation('/me');
    } catch (e) {
      setValue('error', e.response.data.message[0]);
      setValue('showSpinner', false);
    }
  }

  return (
    <ModalButton
      button="Login"
      className="text-white"
      header="Login to your account"
      style={{background: 'transparent'}}
    >
      <Loading isLoading={state.showSpinner} text="Attempting to login...">
        <Form className="login-form" onSubmit={tryLogin}>
          <label className="username-input">
            <Input
              name="username"
              className={
                state.error === 'invalid_username' ? 'invalid-input' : ''
              }
              placeholder="Username"
              value={state.username}
              onChange={setValue}
              type="text"
            />
            <Icon type="user" />
          </label>
          <label className="password-input">
            <Input
              name="password"
              className={
                state.error === 'invalid_password' ? 'invalid-input' : ''
              }
              placeholder="Password"
              value={state.password}
              onChange={setValue}
              type="password"
            />
            <Icon type="lock" />
          </label>
          <div className="mt-2 mb-3">
            <Link className="text-warning" to="/forgot-password">
              Forgot your password?
            </Link>
          </div>
          <button className="rounded-button blue plain" type="submit">
            Log In
          </button>
        </Form>
      </Loading>
    </ModalButton>
  );
}
