import React from 'react';
import {sessionService} from '../../../services/session';
import {FindRetrosGuardProps} from './FindRetrosGuard.types';
import {createFetchHook} from '../../../hooks/fetch-hook.base';

export function FindRetrosGuard({children}: FindRetrosGuardProps) {
  const voteResult = createFetchHook(sessionService.didVoteOnFindRetros);

  if (!voteResult) {
    return <i className="fa fa-spin fa-spinner" />;
  }

  return <>{children}</>;
}
