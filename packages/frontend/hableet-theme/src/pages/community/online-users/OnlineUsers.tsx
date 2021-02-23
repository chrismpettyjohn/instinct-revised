import './OnlineUsers.scss';
import {User} from '@instinct-prj/interface';
import React, {useEffect, useState} from 'react';
import {
  Card,
  Container,
  Column,
  Jumbotron,
  Row,
  UserContainer,
  UserLayout,
  setURL,
  userService,
  UserContainerSkeleton,
} from '@instinct-web/core';

setURL('community/online', <OnlineUsers />);

export function OnlineUsers() {
  const [onlineUsers, setOnlineUsers] = useState<User[]>();
  useEffect(() => {
    async function fetchUsers(): Promise<void> {
      const users = await userService.getOnline();
      setOnlineUsers(users);
    }

    fetchUsers();
  }, []);

  return (
    <UserLayout section="online">
      <Jumbotron title="Come join the party!">
        <p>Take a sneak peak at who's already online</p>
      </Jumbotron>
      <Container>
        <Row>
          <Column side="left">
            <Card>
              <div className="members-container">
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
            </Card>
          </Column>
        </Row>
      </Container>
    </UserLayout>
  );
}
