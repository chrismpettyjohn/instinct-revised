import React, {useContext} from 'react';
import {FindRetrosVoteModalProps} from './FindRetrosVoteModal.types';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {
  configContext,
  createFetchHook,
  sessionContext,
  sessionService,
} from '@instinct-web/core';

export function FindRetrosVoteModal({children}: FindRetrosVoteModalProps) {
  const {user} = useContext(sessionContext);
  const {config} = useContext(configContext);
  const voteResult = createFetchHook(sessionService.didVoteOnFindRetros);

  if (!config.findRetrosUsername) {
    return <>{children}</>;
  }

  if (voteResult === undefined) {
    return null;
  }

  if (voteResult) {
    return <>{children}</>;
  }

  return (
    <Modal isOpen>
      <ModalHeader>Vote For Us On FindRetros</ModalHeader>
      <ModalBody>
        <div className="d-flex">
          <div style={{width: 80, height: 220, overflow: 'hidden'}}>
            <img
              src="https://www.habbo.com.br/habbo-imaging/avatarimage?figure=fa-3276-110.sh-740-110.ch-3013-110.he-3070-1410.hd-3100-2.lg-715-110.ha-3488-63.hr-3012-1394&direction=2&action=wav&size=l"
              style={{position: 'absolute', left: -10}}
            />
          </div>
          <div className="ml-5 mt-5">
            <h1>Hey, {user!.username}</h1>
            <p style={{fontSize: 16, marginTop: 0}}>
              Before you enter our game, can you please take a moment of your
              time to vote for us on FindRetros?
            </p>
            <small>
              Voting for us helps improve our recognition so we can continue to
              build great things on our hotel. We greatly appreciate all votes
              and your support.
            </small>
          </div>
        </div>
      </ModalBody>
      <ModalFooter className="text-right">
        <a
          className="btn btn-dark"
          href={`https://findretros.com/servers/${config.findRetrosUsername}/vote?minimal=1&redirect=1`}
          style={{textDecoration: 'none'}}
        >
          Vote For Us
        </a>
      </ModalFooter>
    </Modal>
  );
}
