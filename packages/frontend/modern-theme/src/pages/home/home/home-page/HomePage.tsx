import React from 'react';
import {NewsSlider} from './news-slider/NewsSlider';
import {SocialMedia} from './social-media/SocialMedia';
import {
  Column,
  Container,
  MyProfile,
  UserOfTheWeek,
} from '@instinct-prj/frontend';

export function HomePage() {
  return (
    <Container>
      <Column side="left">
        <MyProfile />
        <NewsSlider />
      </Column>
      <Column side="right">
        <UserOfTheWeek />
        <SocialMedia />=
      </Column>
    </Container>
  );
}
