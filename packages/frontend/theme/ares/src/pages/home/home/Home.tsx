import './Home.scss';
import React from 'react';
import {setURL} from '@instinct-web/core';
import {MyFriends} from './my-friends/MyFriends';
import {NewsCarousel} from './news-carousel/NewsCarousel';
import {PopularRooms} from './popular-rooms/PopularRooms';
import {UserLayout} from '../../../components/layout/user';
import {UserContainer} from './user-container/UserContainer';
import {CurrentEvents} from './current-events/CurrentEvents';
import {UserOfTheWeek} from './user-of-the-week/UserOfTheWeek';

setURL('me', <Home />);

export function Home() {
  return (
    <UserLayout>
      <div id="home-page h-100">
        <UserContainer />
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-sm-12 col-md-12">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 mb-4">
                  <CurrentEvents />
                </div>
                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 mb-4">
                  <NewsCarousel />
                </div>
                <div className="row">
                  <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12 mb-4">
                    <MyFriends />
                  </div>
                  <div className="col-xl-4 col-lg-3 col-md-12 col-sm-12 mb-4">
                    <PopularRooms />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <UserOfTheWeek />
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
