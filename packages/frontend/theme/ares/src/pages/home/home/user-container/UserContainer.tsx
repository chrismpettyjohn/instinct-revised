import React, {useContext} from 'react';
import {sessionContext} from '@instinct-web/core';

export function UserContainer() {
  const {user} = useContext(sessionContext);

  if (!user) {
    return null;
  }

  return <>User Container</>;
}
