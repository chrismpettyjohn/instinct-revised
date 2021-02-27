import {useLocation, useRoute} from 'wouter';
import React, {useContext, useEffect} from 'react';
import {FlashClient, LoadingScreen} from '@instinct-web/flash-client';
import {
  sessionContext,
  sessionService,
  setURL,
  themeContext,
} from '@instinct-web/core';

setURL('play/app/:sso', <PlayAppPage />);

export function PlayAppPage() {
  const {user, setUser} = useContext(sessionContext);
  const {setStore} = useContext(themeContext);
  const [location, setLocation] = useLocation();
  const [matched, params] = useRoute('play/app/:sso');

  useEffect(() => {
    async function fetchUser() {
      try {
        const user = await sessionService.attemptBearerToken(params!.sso);
        setUser(user);
      } catch (e) {
        setLocation('/login');
      }
    }
  });

  if (!user) {
    return <LoadingScreen />;
  }

  return <FlashClient />;
}
