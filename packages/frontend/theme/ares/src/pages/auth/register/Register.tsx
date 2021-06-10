import './Register.scss';
import {Link, useLocation} from 'wouter';
import ReCAPTCHA from 'react-google-recaptcha';
import React, {SyntheticEvent, useContext, useState} from 'react';
import {GuestLayout} from '../../../components/layout/guest';
import {defaultRegisterState, RegisterState} from './Register.types';
import {
  configContext,
  sessionContext,
  sessionService,
  setURL,
  userService,
} from '@instinct-web/core';
import {FigureSelector} from './figure-selector/FigureSelector';

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

  return (
    <GuestLayout>
      <div className="row h-100-vh justify-content-xxl-center justify-content-xl-center justify-content-md-center align-items-xxl-center align-items-xl-center align-items-md-center ng-tns-c91-0 ng-star-inserted">
        <main className="bg-dark no--sidebar ng-tns-c91-0 register" id="main">
          <div className="row h-100">
            <div className="col-12">
              <div className="d-inline-flex flex-row mb-3 mt-5 w-100">
                <img alt="Logo" id="logo" src={config.logoURL} />
                <div className="d-inline-flex flex-column flex-fill">
                  <h5 className="mb-0 mt-2">Registration</h5>
                  <p>Join the fun by registering today!</p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <form
                className="ng-pristine ng-invalid ng-touched"
                noValidate
                onSubmit={onSubmit}
              >
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-md-12 col-sm-12 bg-dark p-4">
                    <div className="mb-3">
                      <label className="form-label" htmlFor="username">
                        Username
                      </label>
                      <div className="input-group" id="username-group">
                        <img
                          alt="Mannequin"
                          className="d-xxl-block d-xl-block d-lg-block d-md-block d-none mannequin"
                          src="https://habbo.im/assets/images/habbo.gif"
                        />
                        <input
                          aria-describedby="usernameHelp"
                          autoComplete="username"
                          className="form-control p-4"
                          id="username"
                          required
                          type="text"
                          onChange={e => onChange('username', e.target.value)}
                        />
                      </div>
                      <div className="form-text" id="usernameHelp">
                        Type your username in the box above
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                        <input
                          aria-describedby="passwordHelp"
                          autoComplete="current-password"
                          className="form-control p-4 ng-untouched ng-pristine ng-invalid"
                          id="password"
                          required
                          type="password"
                          onChange={e => onChange('password', e.target.value)}
                        />

                        <div className="form-text" id="passwordHelp">
                          Type your password in the box above
                        </div>
                      </div>

                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="confirm-password"
                        >
                          Password
                        </label>
                        <input
                          aria-describedby="confirmPasswordHelp"
                          autoComplete="current-password"
                          className="form-control p-4 ng-untouched ng-pristine ng-invalid"
                          id="confirm-password"
                          required
                          type="password"
                          onChange={e =>
                            onChange('passwordAgain', e.target.value)
                          }
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
                        className="form-control p-4 ng-untouched ng-pristine ng-invalid"
                        id="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                        required
                        type="email"
                        onChange={e => onChange('email', e.target.value)}
                      />
                    </div>

                    <div className="mb-3">
                      <FigureSelector
                        figures={[
                          {
                            group: 'Boy',
                            look:
                              'ch-660-64.ea-1401-63.hd-600-8.hr-3920-33-1345.lg-700-73.fa-1212-63.sh-725-9',
                          },
                          {
                            group: 'Girl',
                            look:
                              'ch-660-64.ea-1401-63.hd-600-8.hr-3920-33-1345.lg-700-73.fa-1212-63.sh-725-9',
                          },
                          {
                            group: 'Girl',
                            look:
                              'sh-3089-110.hr-3789-61-61.ch-3539-92.lg-3019-110.hd-600-2',
                          },
                          {
                            group: 'Girl',
                            look:
                              'sh-3252-90-90.hr-3273-1394-42.ch-3729-110-1408.hd-3096-10.lg-3058-11',
                          },
                          {
                            group: 'Girl',
                            look:
                              'hr-3811-1394.ch-660-1331.he-1604-63.hd-625-4.lg-3216-132',
                          },
                        ]}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-3">
                      <div className="selected-look d-flex justify-content-center">
                        <img src="https://habbo.city/habbo-imaging/avatarimage?figure=ea-1401-63.lg-275-73.hr-828-45.fa-1212-63.ch-255-64.hd-180-8.sh-290-91&amp;action=std&amp;gesture=std&amp;direction=2&amp;head_direction=2&amp;size=l&amp;headonly=0" />
                      </div>
                    </div>

                    <div className="d-inline-flex justify-content-center w-100 mt-2 mb-3">
                      <button
                        className="btn btn-danger w-25 p-3"
                        type="submit"
                        disabled={disabled}
                      >
                        Let's Go!
                      </button>
                      <ReCAPTCHA
                        sitekey={config.googleRecaptchaClientKey}
                        onChange={key => onChange('captcha', key!)}
                        size="invisible"
                      />
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
      </div>
    </GuestLayout>
  );
}
