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
import {FigureSelector} from './figure-selector/FigureSelector';
import {UsernameField} from '../../../components/username-field/UsernameField';

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
    !state.figure ||
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

  return (
    <GuestLayout>
      <main id="main" className="no--sidebar">
        <div className="row h-100">
          <div className="d-inline-flex flex-row mb-3 mt-5 w-100">
            <img alt="Logo" id="logo" src={config.logoURL} />
            <div className="d-inline-flex flex-column flex-fill">
              <h5 className="mb-0 mt-2">Registration</h5>
              <p>Join the fun by registering today!</p>
            </div>
          </div>
          <div className="col-12">
            <form noValidate onSubmit={onSubmit}>
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-md-12 col-sm-12 bg-dark p-4">
                  <div className="mb-3">
                    <UsernameField
                      onChange={newUsername =>
                        onChange('username', newUsername)
                      }
                      username={state.username}
                      figure={state.figure?.look}
                    />
                  </div>
                  <div className="mb-3">
                    <div className="mb-3">
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                      <input
                        aria-describedby="passwordHelp"
                        autoComplete="current-password"
                        className="form-control p-4"
                        id="password"
                        required
                        type="password"
                        onChange={e => onChange('password', e.target.value)}
                        value={state.password}
                      />

                      <div className="form-text" id="passwordHelp">
                        Type your password in the box above
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label" htmlFor="confirm-password">
                        Password
                      </label>
                      <input
                        aria-describedby="confirmPasswordHelp"
                        autoComplete="current-password"
                        className="form-control p-4"
                        id="confirm-password"
                        required
                        type="password"
                        onChange={e =>
                          onChange('passwordAgain', e.target.value)
                        }
                        value={state.passwordAgain}
                      />
                      <div className="form-text" id="confirmPasswordHelp">
                        Repeat your password in the box above
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-6 col-xl-6 col-md-12 col-sm-12 bg-dark p-4">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                      E-Mail
                    </label>
                    <input
                      autoComplete="email"
                      className="form-control p-4"
                      id="email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                      required
                      type="email"
                      onChange={e => onChange('email', e.target.value)}
                      value={state.email}
                    />
                  </div>

                  <div className="mb-3">
                    <ReCAPTCHA
                      sitekey={config.googleRecaptchaClientKey}
                      onChange={key => onChange('captcha', key!)}
                      onExpired={() => onChange('captcha', undefined)}
                    />
                  </div>

                  <div className="mb-3">
                    <FigureSelector
                      figure={state.figure}
                      figures={[
                        {
                          group: 'Boy',
                          look: 'ea-1401-63.lg-275-73.hr-828-45.fa-1212-63.ch-255-64.hd-180-8.sh-290-91',
                        },
                        {
                          group: 'Boy',
                          look: 'hd-209-1373.lg-3320-110-1408.hr-3163-42.sh-3524-110-92.ch-3077-64-1408',
                        },
                        {
                          group: 'Boy',
                          look: 'hd-207-1.lg-3058-1428.hr-3162-1906.sh-3089-110.cc-3874-1897-1408',
                        },
                        {
                          group: 'Boy',
                          look: 'he-1605-1408.lg-285-64.hr-155-42.ch-225-1408.hd-3095-8.sh-300-1408.cc-260-84',
                        },
                        {
                          group: 'Girl',
                          look: 'hr-3791-45.wa-4060-92-71.lg-3933-92.hd-629-1392.fa-3276-72.ca-3414-92.he-3082-92.ch-3881-110.sh-735-110',
                        },
                        {
                          group: 'Girl',
                          look: 'lg-720-92.fa-3276-97.ch-50000-77.he-1603-77.hd-629-15.hr-7326-1403-1403.ha-4136-92.ca-3885-92-92.sh-3035-7',
                        },
                        {
                          group: 'Girl',
                          look: 'hd-600-2.he-1603-71.lg-3078-71.sh-906-92.hr-3852-45.ha-1005-1414.ca-3885-1414-1408.ch-665-92.fa-3276-73',
                        },
                        {
                          group: 'Girl',
                          look: 'lg-3018-1338.hr-3852-32.he-3329-1412-1330.sh-3016-1409.hd-605-8.ch-3293-92-1412.fa-3276-97',
                        },
                      ]}
                      onSelect={newFigure => onChange('figure', newFigure)}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <div className="selected-look d-flex justify-content-center">
                      <img
                        src={`https://avatars.habboon.pw/avatarimage.php?figure=${
                          state.figure
                            ? state.figure.look
                            : 'h-3089-110.hr-3789-61-61.ch-3539-92.lg-3019-110.hd-600-20'
                        }&action=std&gesture=std&direction=2&head_direction=2&size=l&headonly=0`}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="d-inline-flex justify-content-center w-100 mt-2 mb-3">
                    <button
                      className="btn btn-danger w-25 p-3"
                      type="submit"
                      disabled={disabled}
                    >
                      Let's Go!
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-12">
            <div className="d-flex justify-content-center mt-4 mt-xl-0 mt-lg-0 pb-3">
              <Link href="/" id="register--back">
                Already got an account?{' '}
                <span className="text-danger">Back to Login!</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </GuestLayout>
  );
}
