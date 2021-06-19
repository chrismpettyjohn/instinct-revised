import './ErrorPage.scss';
import {Redirect} from 'wouter';
import React, {useContext} from 'react';
import {sessionContext, setNotFound} from '@instinct-web/core';

setNotFound(<NotFound />);

export function NotFound() {
  const {user} = useContext(sessionContext);
  return <Redirect to={user ? '/me' : '/login'} />;
}
