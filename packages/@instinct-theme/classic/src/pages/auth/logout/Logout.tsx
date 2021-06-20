import {Redirect} from 'wouter';
import React, {useContext, useEffect} from 'react';
import {sessionContext, sessionService, setURL} from '@instinct-web/core';

setURL('logout', <Logout />);

export function Logout() {
  const {setUser} = useContext(sessionContext);

  useEffect(() => {
    function logout() {
      sessionService.logout();
      setUser(undefined);
    }

    logout();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <Redirect to="/login" />;
}
