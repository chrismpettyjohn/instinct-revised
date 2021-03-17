import React from 'react';
import {UserProfileWidgetProps} from '../';
import {Avatar as UserAvatar, Icon} from '@instinct-web/core';
import {Avatar, Card, CardContent, Grid, Typography} from '@material-ui/core';

export function UserContainer({profile}: UserProfileWidgetProps) {
  return (
    <Card style={{background: '#272B34', color: 'white'}}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Avatar style={{height: 100, width: 100, marginTop: '10%'}}>
              <UserAvatar
                look={profile?.user?.figure}
                size="l"
                style={{height: 160}}
              />
            </Avatar>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="subtitle1">
              {profile?.user?.username}
            </Typography>
            <Typography variant="caption">"{profile?.user?.motto}"</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
