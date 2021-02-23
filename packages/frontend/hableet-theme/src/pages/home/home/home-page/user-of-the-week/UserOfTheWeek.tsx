import React from 'react';
import {Card} from '../../../../../components/card/Card';
import {
  useFetchUserOfTheWeek,
  UserContainer,
  UserContainerSkeleton,
} from '@instinct-web/core';

export function UserOfTheWeek() {
  const users = useFetchUserOfTheWeek();

  return (
    <Card header="User of the Week">
      {users === undefined && <UserContainerSkeleton />}
      {users?.length === 0 && (
        <p>Nobody has been picked yet. Now's your time to shine!</p>
      )}
      {users?.map(_ => (
        <UserContainer key={_.id} user={_} />
      ))}
    </Card>
  );
}
