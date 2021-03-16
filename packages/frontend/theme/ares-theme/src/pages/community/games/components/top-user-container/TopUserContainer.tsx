import React from 'react';
import {Link} from 'wouter';
import {Avatar as UserAvatar} from '@instinct-web/core';
import {Avatar, Grid, Paper, Typography} from '@material-ui/core';
import {TopUserContainerProps} from './TopUserContainer.types';

export function TopUserContainer({
  user,
  value,
  altText,
}: TopUserContainerProps) {
  return (
    <Link key={user.id} href={`/profile/${user.username}`}>
      <Paper
        elevation={3}
        style={{
          background: '#1e2128',
          color: 'white',
          marginBottom: '2.5%',
          padding: 10,
        }}
      >
        <Grid container>
          <Grid item xs={4}>
            <Avatar style={{width: 65, height: 65}}>
              <UserAvatar look={user.figure} />
            </Avatar>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="subtitle1">
              <Link
                style={{color: '#9C29B0', textDecoration: 'none'}}
                to={`/profile/${user.username}`}
              >
                @{user.username}
              </Link>
            </Typography>
            <Typography variant="body1">
              <b className="text-primary">
                {Number(user[value]).toLocaleString()}
              </b>
              &nbsp;{altText ?? value}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Link>
  );
}
