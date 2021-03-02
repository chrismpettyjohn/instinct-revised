import React, {useContext, useEffect} from 'react';
import {sessionContext, setURL, themeContext} from '@instinct-web/core';

setURL('play/flash', <PlayFlashPage />);

export function PlayFlashPage() {
  const {user, setUser} = useContext(sessionContext);
  const {showClient, setStore} = useContext(themeContext);

  useEffect(() => {
    setStore({showClient: true});
    setUser({clientType: 'flash'});
  }, [showClient, user?.clientType]);

  return null;
}
