import './Home.scss';
import React from 'react';
import {setURL} from '@instinct-web/core';
import {UserLayout} from '../../../components/layout/user';
import {UserContainer} from './user-container/UserContainer';
import {CurrentEvents} from './current-events/CurrentEvents';
import {NewsCarousel} from './news-carousel/NewsCarousel';

setURL('me', <Home />);

export function Home() {
  return (
    <UserLayout>
      <div id="home-page h-100 w-100">
        <UserContainer />
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 mb-4">
              <CurrentEvents />
            </div>
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 mb-4">
              <NewsCarousel />
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
