import React, {useContext, useEffect} from 'react';
import {sessionContext, setURL, themeContext} from '@instinct-web/core';

setURL('play/nitro', <PlayNitroPage />);

export function PlayNitroPage() {
  const {setUser} = useContext(sessionContext);
  const {setStore} = useContext(themeContext);

  useEffect(() => {
    setUser({clientType: 'nitro'});
    setStore({showClient: true});
  }, []);

  return null;
}
