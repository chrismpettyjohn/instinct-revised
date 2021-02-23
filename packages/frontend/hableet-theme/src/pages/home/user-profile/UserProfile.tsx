import React from 'react';
import './UserProfile.scss';
import {Rooms} from './rooms';
import {Badges} from './badges';
import {Groups} from './groups';
import {useRoute} from 'wouter';
import {Friends} from './friends';
import {UserContainer} from './user-container';
import {FavoriteVideo} from './favorite-video/FavoriteVideo';
import {
  Container,
  Column,
  Loading,
  Jumbotron,
  UserLayout,
  setURL,
  useFetchUserByUsername,
} from '@instinct-web/core';

setURL('profile/:username', <UserProfile />);

export function UserProfile() {
  const [match, params] = useRoute<{username: string}>('/profile/:username');
  const profile = useFetchUserByUsername(params!.username);

  return (
    <UserLayout section="profile">
      <Loading isLoading={profile === undefined}>
        <Jumbotron title={`The profile of ${profile?.user.username}`} />
        <Container>
          <Column side="right">
            <UserContainer profile={profile} />
            <FavoriteVideo profile={profile} />
          </Column>
          <Column side="left">
            <Badges profile={profile} />
            <Friends profile={profile} />
            <Groups profile={profile} />
            <Rooms profile={profile} />
          </Column>
        </Container>
      </Loading>
    </UserLayout>
  );
}
