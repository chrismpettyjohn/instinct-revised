import React, {useContext} from 'react';
import {Avatar, Grid, Typography} from '@material-ui/core';
import {Avatar as UserAvatar, sessionContext} from '@instinct-web/core';

export function UserProfile() {
  const {user} = useContext(sessionContext);

  if (!user) {
    return null;
  }

  return (
    <div style={{marginTop: '10%', padding: 4}}>
      <div style={{marginTop: '10%', textAlign: 'center', width: '100%'}}>
        <Avatar
          style={{
            background: 'url()',
            backgroundSize: 'cover',
            border: '5px solid #9C28B0',
            width: 100,
            height: 100,
            margin: '0 auto',
          }}
        >
          <UserAvatar
            look={user.figure}
            size="l"
            direction={2}
            headDirection={2}
            gesture="sml"
            action="crr=9"
            style={{height: 160}}
          />
        </Avatar>
      </div>
      <div style={{marginTop: '10%', textAlign: 'center', width: '100%'}}>
        <Typography variant="h5">{user.username}</Typography>
        <Typography
          className="text-grey"
          variant="subtitle1"
          style={{color: '#495057'}}
        >
          {user.motto}
        </Typography>
      </div>
      <Grid container style={{marginTop: '10%', textAlign: 'center'}}>
        <Grid item xs={4}>
          <Typography variant="body1">
            {Number(user.credits).toLocaleString()}
          </Typography>
          <Typography variant="subtitle2" style={{color: '#495057'}}>
            Credits
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1">
            {Number(user.pixels).toLocaleString()}
          </Typography>
          <Typography variant="subtitle2" style={{color: '#495057'}}>
            Pixels
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1">
            {Number(user.points).toLocaleString()}
          </Typography>
          <Typography variant="subtitle2" style={{color: '#495057'}}>
            Points
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
