import React from 'react';
import './UserProfile.scss';
import {Rooms} from './rooms';
import {useRoute} from 'wouter';
import {Friends} from './friends';
import {UserContainer} from './user-container';
import {UserLayout} from '../../../components/layout/user';
import {FavoriteVideo} from './favorite-video/FavoriteVideo';
import StaffBadge from '../../../public/img/staff_badge.gif';
import {Loading, setURL, useFetchUserByUsername} from '@instinct-web/core';
import {MiniJumbotron} from '../../../components/mini-jumbotron/MiniJumbotron';

setURL('profile/:username', <UserProfile />);

export function UserProfile() {
  const [match, params] = useRoute<{username: string}>('/profile/:username');
  const profile = useFetchUserByUsername(params!.username);

  return (
    <UserLayout>
      <Loading isLoading={profile === undefined}>
        <div className="page-content">
          <div className="row">
            <div className="col-12">
              <MiniJumbotron>
                <div className="row">
                  <div className="col">
                    <h1>{profile?.user?.username}'s Profile</h1>
                    <p>{profile?.user?.motto}</p>
                  </div>
                  <div className="col text-right">
                    {profile?.user?.rank?.permissions?.websiteShowStaff && (
                      <img src={StaffBadge} height={100} />
                    )}
                  </div>
                </div>
              </MiniJumbotron>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <UserContainer profile={profile} />
              <FavoriteVideo profile={profile} />
            </div>
            <div className="col">
              <Friends profile={profile} />
              <Rooms profile={profile} />
            </div>
          </div>
        </div>
      </Loading>
    </UserLayout>
  );
}
