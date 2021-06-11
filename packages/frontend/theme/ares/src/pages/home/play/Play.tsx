import React, {useContext, useEffect} from 'react';
import {sessionContext, setURL, themeContext} from '@instinct-web/core';

setURL('play', <Play />);

export function Play() {
  const {user, setUser} = useContext(sessionContext);
  const {showClient, setStore} = useContext(themeContext);

  useEffect(() => {
    if (!showClient) setStore({showClient: true});
    if (!user?.clientType) setUser({clientType: 'nitro'});
  }, [showClient, user?.clientType]);

  return null;
}
