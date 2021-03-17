import './Games.scss';
import React from 'react';
import {TopPixels} from './top-pixels';
import {TopPoints} from './top-points';
import {TopCredits} from './top-credits';
import {setURL} from '@instinct-web/core';
import {UserLayout} from '../../../components/layout/user';
import {Grid, Typography} from '@material-ui/core';
setURL('community/games', <Games />);

export function Games() {
  return (
    <UserLayout>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5">High Scores</Typography>
        </Grid>
        <Grid item xs={4}>
          <TopCredits />
        </Grid>
        <Grid item xs={4}>
          <TopPixels />
        </Grid>
        <Grid item xs={4}>
          <TopPoints />
        </Grid>
      </Grid>
    </UserLayout>
  );
}
