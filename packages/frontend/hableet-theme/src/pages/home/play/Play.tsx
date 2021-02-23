import React, {useContext, useEffect} from 'react';
import {setURL, themeContext} from '@instinct-web/core';

setURL('play', <PlayPage />);

export function PlayPage() {
  const {setStore} = useContext(themeContext);

  useEffect(() => {
    setStore({showClient: true});
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}
