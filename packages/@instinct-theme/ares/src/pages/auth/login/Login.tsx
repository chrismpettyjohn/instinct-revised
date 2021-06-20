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
import {Carousel} from '../../../components/carousel/Carousel';
import {AutoPopulateUsernameField} from './auto-populate-username-field/AutoPopulateUsernameField';

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
      <div
        className="row h-100-vh justify-content-xxl-center justify-content-xl-center
    justify-content-md-center align-items-xxl-center align-items-xl-center
    align-items-md-center"
      >
        <main id="main" className="bg-dark no--sidebar">
          <div className="row h-100">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="container h-100 w-100 d-flex flex-column">
                <div className="d-flex h-100 flex-column justify-content-center">
                  <div className="d-flex mb-3 mt-5 mt-xl-0 mt-lg-0">
                    <img
                      src={config.logoURL}
                      className="flex-fill"
                      id="logo"
                      alt="Logo"
                    />
                  </div>
                  <form onSubmit={onSubmit}>
                    <div className="mb-3">
                      <AutoPopulateUsernameField
                        onChange={newUsername =>
                          onChange('username', newUsername)
                        }
                        username={state.username}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="form-control p-4"
                        value={state.password}
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
                      New Around Here?{' '}
                      <span className="ml-2 text-danger">
                        Join {config.siteName}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-xxl-block d-xl-block d-lg-block d-none bg-red">
              <div className="container d-flex h-100 flex-column justify-content-center">
                <Carousel
                  slides={[
                    {
                      caption: 'rooms are here',
                      backgroundImage: 'https://i.imgur.com/rRGEOm1.png',
                    },
                    {
                      caption: 'vip rooms are here',
                      backgroundImage: 'https://i.imgur.com/3BHl0iB.png',
                    },
                    {
                      caption: 'more stuff is here',
                      backgroundImage: 'https://i.imgur.com/lsnkHZQ.png',
                    },
                  ]}
                  slideClassName="p-5 text-center"
                  slideStyle={{
                    height: 466,
                  }}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </GuestLayout>
  );
}
