import React from 'react';
import {Group} from '@instinct-prj/interface';
import {
  Card,
  Column,
  Container,
  Jumbotron,
  setURL,
  useFetchPopularGroups,
  UserLayout,
} from '@instinct-web/core';

setURL('groups', <PopularGroups />);

export function PopularGroups() {
  const popularGroups: Group[] | undefined = useFetchPopularGroups();

  return (
    <UserLayout>
      <Jumbotron title="Popular Groups" />
      <Container>
        <Column side="left">
          <Card>
            {popularGroups?.length === 0 && (
              <>
                <h4>Hmm,</h4>
                <p>There aren't any groups created yet!</p>
              </>
            )}
            {popularGroups?.map(_ => (
              <div key={_.id}>{_.name}</div>
            ))}
          </Card>
        </Column>
      </Container>
    </UserLayout>
  );
}
