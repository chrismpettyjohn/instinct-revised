import React from 'react';
import './UserProfile.scss';
import {useRoute} from 'wouter';
import {UserLayout} from '../../../components/layout/user';
import {setURL, useFetchUserByUsername} from '@instinct-web/core';
import {Card, CardContent, Grid, Typography} from '@material-ui/core';

setURL('profile/:username', <UserProfile />);

export function UserProfile() {
  const [match, params] = useRoute<{username: string}>('/profile/:username');
  const profile = useFetchUserByUsername(params!.username);

  return (
    <UserLayout>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4">
            {profile?.user?.username}'s Profile
          </Typography>
          <Typography variant="subtitle1">"{profile?.user?.motto}"</Typography>
        </Grid>
      </Grid>
    </UserLayout>
  );
}
