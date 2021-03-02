import {Redirect} from 'wouter';
import React, {useContext, useEffect} from 'react';
import {setURL, themeContext} from '@instinct-web/core';

setURL('play/flash', <PlayFlashPage />);

export function PlayFlashPage() {
  const {setStore} = useContext(themeContext);

  useEffect(() => {
    setStore({showClient: true});
  }, []);

  return <Redirect to="/me" />;
}
