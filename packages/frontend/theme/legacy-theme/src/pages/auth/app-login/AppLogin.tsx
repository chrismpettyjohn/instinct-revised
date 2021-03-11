import React, {useContext, useEffect} from 'react';
import {useLocation, useRoute} from 'wouter';
import {
  configContext,
  sessionContext,
  sessionService,
  setURL,
  themeContext,
} from '@instinct-web/core';

setURL('login/app/:sso', <PlayAppPage />);

export function PlayAppPage() {
  const {config} = useContext(configContext);
  const {setStore} = useContext(themeContext);
  const [location, setLocation] = useLocation();
  const {user, setUser} = useContext(sessionContext);
  const [matched, params] = useRoute('/login/app/:sso');

  useEffect(() => {
    setStore({applicationMode: true});
    async function login() {
      try {
        const userAcc = await sessionService.attemptBearerToken(params!.sso);
        setUser(userAcc);
      } catch {
        setLocation('/login');
      }
    }
    if (params?.sso) {
      login();
    } else {
      setLocation('/login');
    }
  }, []);

  if (user) {
    setLocation('/play/flash');
    return null;
  }

  if (!user) {
    return (
      <div
        className="h-100 w-100 text-white"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <div className="text-center">
          <i className="fa fa-spin fa-spinner fa-5x" />
          <h3 className="text-uppercase mt-2">
            Logging In To {config.siteName}
          </h3>
        </div>
      </div>
    );
  }

  return null;
}
