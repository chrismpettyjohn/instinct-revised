import './Room.scss';
import {Link, useRoute} from 'wouter';
import React, {useContext} from 'react';
import {
  Card,
  Column,
  Jumbotron,
  Loading,
  clientService,
  UserLayout,
  setURL,
  sessionContext,
  themeContext,
  UserContainer,
  useFetchRoomByID,
} from '@instinct-web/core';

setURL('rooms/:roomID', <RoomPage />);

export function RoomPage() {
  const [match, params] = useRoute<{roomID: string}>('/rooms/:roomID');
  const {online} = useContext(sessionContext);
  const {setStore} = useContext(themeContext);
  const room = useFetchRoomByID(params!.roomID);

  function enterRoom(): void {
    clientService.enterRoom(room!.id);
    setStore({showClient: true});
  }

  return (
    <UserLayout section="community_rooms">
      <Jumbotron title={room?.name}>
        Owned by{' '}
        <Link to={`/profile/${room?.user?.username}`}>
          {room?.user?.username}
        </Link>
      </Jumbotron>
      <Loading isLoading={room === undefined}>
        <div className="page-content">
          <Column side="left">
            <Card header="Room Information">
              <ul>
                <li>
                  Max Users: <b>{room?.maxUsers}</b>
                </li>
                <li>
                  Current Users: <b>{room?.currentUsers}</b>
                </li>
              </ul>
              <button
                className="rounded-button blue plain"
                disabled={!online}
                onClick={enterRoom}
              >
                Enter Room
              </button>
            </Card>
          </Column>
          <Column side="right">
            <Card header="Owned By">
              {room?.user && (
                <div className="mb-2">
                  <UserContainer user={room?.user} />
                </div>
              )}
            </Card>
          </Column>
        </div>
      </Loading>
    </UserLayout>
  );
}
