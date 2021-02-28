import React, {useContext, useEffect} from 'react';
import {sessionContext, setURL, themeContext} from '@instinct-web/core';

setURL('play/flash', <PlayFlashPage />);
setURL('play/nitro', <PlayFlashPage />);

export function PlayFlashPage() {
  const {setUser} = useContext(sessionContext);
  const {setStore} = useContext(themeContext);
  useEffect(() => {
    setUser({clientType: 'flash'});
    setStore({showClient: true});
  }, []);

  return null;
}
