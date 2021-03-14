import './Staff.scss';
import React from 'react';
import {UserLayout} from '../../../components/layout/user';
import {
  Avatar as UserAvatar,
  setURL,
  useFetchStaffTeam,
} from '@instinct-web/core';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';

setURL('community/staff', <Staff />);

export function Staff() {
  const staff = useFetchStaffTeam();

  return (
    <UserLayout>
      <Typography variant="h5">Staff Team</Typography>
      <Typography variant="subtitle1">
        Our staff team help ensure the hotel rules are followed and provide a
        safe environment.
      </Typography>
      <Grid container>
        {staff?.map(_ => (
          <Grid key={`rank_${_.id}`} item xs={4}>
            <Card style={{width: '100%'}} raised>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {_.name}
                </Typography>
                {_.users!.map(user => (
                  <div key={`user_${user.id}`} style={{display: 'flex'}}>
                    <Avatar
                      style={{
                        border: '5px solid #9C28B0',
                        width: 65,
                        height: 65,
                      }}
                    >
                      <UserAvatar look={user.figure} />
                    </Avatar>
                    <div style={{marginLeft: '10%'}}>
                      <Typography variant="h5" component="h2">
                        {user.username}
                      </Typography>
                      <Typography color="textSecondary">
                        {user.online ? 'Online' : 'Offline'}
                      </Typography>
                      <Typography variant="body2" component="p">
                        "{user.motto}"
                      </Typography>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </UserLayout>
  );
}
