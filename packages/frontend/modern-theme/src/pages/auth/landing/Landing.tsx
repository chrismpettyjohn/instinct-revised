import {Redirect} from 'wouter';
import React, {useContext} from 'react';
import {sessionContext, setURL} from '@instinct-prj/frontend';

setURL('', <Landing />);
setURL('/', <Landing />);

export function Landing() {
  const {user} = useContext(sessionContext);

  return user === undefined ? <Redirect to="/login" /> : <Redirect to="/me" />;
}
