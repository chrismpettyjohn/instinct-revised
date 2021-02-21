import React from 'react';
import { Column, Container, MyProfile, RecentNews } from '@instinct-prj/frontend';
import { PraiseLouis } from './praise-louis/PraiseLouis';

export function HomePage() {
  return (
    <Container>
      <Column side="left">
        <MyProfile />
        <PraiseLouis />
      </Column>
      <Column side="right">
        <RecentNews />
      </Column>
    </Container>
  );
}
