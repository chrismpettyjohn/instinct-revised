import './WhosOnline.scss';
import {take} from 'lodash';
import React, {useState} from 'react';
import {useFetchOnlineUsers} from '@instinct-web/core';
import {Card} from '../../../../../components/card/Card';
import {Modal, ModalBody, ModalHeader} from 'reactstrap';
import {
  UserContainer,
  UserContainerSkeleton,
} from '../../../../../components/user-container';

export function WhosOnline() {
  const [refresh, setRefresh] = useState(0);
  const onlineUsers = useFetchOnlineUsers(refresh);
  const [isOpen, setModal] = useState(false);

  function toggle() {
    setModal(_ => !_);
  }

  return (
    <>
      <Card header="Who's Online">
        {onlineUsers === undefined && (
          <>
            <UserContainerSkeleton />
            <UserContainerSkeleton />
            <UserContainerSkeleton />
          </>
        )}
        {take(onlineUsers ?? [], 5).map(_ => (
          <UserContainer key={_.id} user={_} />
        ))}
        {onlineUsers?.length === 0 && (
          <p>It looks like everybody is sleeping!</p>
        )}
        {onlineUsers && onlineUsers.length > 5 && (
          <>
            <hr className="mt-2" />
            <button
              className="btn btn-outline-primary btn-block"
              onClick={toggle}
            >
              See All Online Users ({onlineUsers!.length})
            </button>
          </>
        )}
      </Card>
      {isOpen && (
        <Modal isOpen toggle={toggle}>
          <ModalHeader>
            Who's Online
            <i
              className="ml-2 fa fa-sync"
              style={{cursor: 'pointer'}}
              onClick={() => setRefresh(_ => _ + 1)}
            />
          </ModalHeader>
          <ModalBody>
            <div
              className="members-container"
              style={{maxHeight: 600, overflowY: 'auto'}}
            >
              {onlineUsers === undefined && (
                <>
                  <UserContainerSkeleton />
                  <UserContainerSkeleton />
                  <UserContainerSkeleton />
                </>
              )}
              {onlineUsers?.map(_ => (
                <UserContainer key={_.id} user={_} />
              ))}
              {onlineUsers?.length === 0 && (
                <p>It looks like everybody is sleeping!</p>
              )}
            </div>
          </ModalBody>
        </Modal>
      )}
    </>
  );
}
