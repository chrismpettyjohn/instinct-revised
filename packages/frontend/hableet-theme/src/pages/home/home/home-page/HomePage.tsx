import React from 'react';
import {NewsSlider} from './news-slider/NewsSlider';
import {SocialMedia} from './social-media/SocialMedia';
import {Column, MyProfile, UserOfTheWeek} from '@instinct-web/core';

export function HomePage() {
  return (
    <div className="page-content">
      <Column side="left">
        <MyProfile />
        <NewsSlider />
      </Column>
      <Column side="right">
        <UserOfTheWeek />
        <SocialMedia />=
      </Column>
    </div>
  );
}
