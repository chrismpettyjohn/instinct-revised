import React, {useContext, useEffect} from 'react';
import {setURL, themeContext} from '@instinct-web/core';

setURL('play/nitro', <PlayNitroPage />);

export function PlayNitroPage() {
  const {setStore} = useContext(themeContext);

  useEffect(() => {
    setStore({showClient: true});
  }, []);

  return null;
}
