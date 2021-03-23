import React from 'react';
import {Column} from '@instinct-web/core';
import {MyProfile} from './my-profile/MyProfile';
import {NewsSlider} from './news-slider/NewsSlider';
import {WhosOnline} from './whos-online/WhosOnline';
import {SocialMedia} from './social-media/SocialMedia';
import {UserOfTheWeek} from './user-of-the-week/UserOfTheWeek';

export function HomePage() {
  return (
    <div className="page-content">
      <Column side="left">
        <MyProfile />
        <NewsSlider />
      </Column>
      <Column side="right">
        <UserOfTheWeek />
        <SocialMedia />
        <WhosOnline />
      </Column>
    </div>
  );
}
