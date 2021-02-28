import {useLocation, useRoute} from 'wouter';
import React, {useContext, useEffect} from 'react';
import {LoadingScreen} from '@instinct-web/flash-client';
import {
  sessionContext,
  sessionService,
  setURL,
  themeContext,
} from '@instinct-web/core';

setURL('play/app/:sso', <PlayAppPage />);

export function PlayAppPage() {
  const {setStore} = useContext(themeContext);
  const [location, setLocation] = useLocation();
  const {user, setUser} = useContext(sessionContext);
  const [matched, params] = useRoute('play/app/:sso');

  useEffect(() => {
    setUser({clientType: 'desktop'});
    async function fetchUser() {
      try {
        const newUser = await sessionService.attemptBearerToken(params!.sso);
        setUser(newUser);
        await sessionService.updateClientType('desktop');
        setLocation('/play/flash');
      } catch (e) {
        setLocation('/login');
      }
    }
    fetchUser();
  });

  if (!user) {
    return <LoadingScreen />;
  }

  return null;
}
