import React from 'react';
import {Column} from '@instinct-web/core';
import {MyProfile} from './my-profile/MyProfile';
import {NewsSlider} from './news-slider/NewsSlider';
import {Card} from '../../../../components/card/Card';
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
        <iframe
          width="100%"
          height={315}
          className="mt-2"
          src="https://www.youtube-nocookie.com/embed/28hYUZMufDg?controls=0&amp;start=18&amp"
          style={{border: '4px solid #001726', borderRadius: 4}}
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Column>
    </div>
  );
}
