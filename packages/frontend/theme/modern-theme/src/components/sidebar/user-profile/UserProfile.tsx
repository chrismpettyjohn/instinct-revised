import React, {useContext} from 'react';
import {Avatar, Grid, Typography} from '@material-ui/core';
import {Avatar as UserAvatar, sessionContext} from '@instinct-web/core';

export function UserProfile() {
  const {user} = useContext(sessionContext);

  if (!user) {
    return null;
  }

  return (
    <div style={{padding: 4}}>
      <div style={{textAlign: 'center', width: '100%'}}>
        <img src="/img/logo/regular.png" style={{maxWidth: 300}} />
      </div>
      <div style={{marginTop: '5%', textAlign: 'center', width: '100%'}}>
        <Avatar
          style={{
            border: '5px solid #0D47A1',
            width: 75,
            height: 75,
            margin: '0 auto',
          }}
        >
          <UserAvatar look={user.figure} />
        </Avatar>
      </div>
      <div style={{marginTop: '5%', textAlign: 'center', width: '100%'}}>
        <Typography variant="h5">{user.username}</Typography>
        <Typography className="text-grey" variant="subtitle1">
          {user.motto}
        </Typography>
      </div>
      <Grid container style={{marginTop: '5%', textAlign: 'center'}}>
        <Grid item xs={4}>
          <Typography variant="h6">
            {Number(user.credits).toLocaleString()}
          </Typography>
          <Typography variant="subtitle2">Credits</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">
            {Number(user.pixels).toLocaleString()}
          </Typography>
          <Typography variant="subtitle2">Pixels</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">
            {Number(user.points).toLocaleString()}
          </Typography>
          <Typography variant="subtitle2">Points</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
