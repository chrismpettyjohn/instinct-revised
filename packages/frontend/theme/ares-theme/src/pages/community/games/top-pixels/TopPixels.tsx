import {User} from '@instinct-prj/interface';
import React, {useEffect, useState} from 'react';
import {Icon, userService} from '@instinct-web/core';
import {Card, CardContent, Typography} from '@material-ui/core';
import {GamesCardState, defaultGamesCardState} from '../Games.types';
import {TopUserContainer} from '../components/top-user-container/TopUserContainer';

export function TopPixels() {
  const [state, setState] = useState<GamesCardState>(defaultGamesCardState);

  useEffect(() => {
    async function fetchMostPixels(): Promise<void> {
      const users: User[] = await userService.getMostPixels();
      setState({
        users,
        showSpinner: false,
      });
    }
    fetchMostPixels();
  }, []);

  return (
    <Card style={{background: '#272B34', color: 'white'}}>
      <CardContent>
        <div style={{display: 'flex'}}>
          <Icon style={{color: '#BA7CC2', marginRight: '2.5%'}} type="duck" />
          <Typography
            variant="h6"
            style={{color: '#BA7CC2', marginTop: '-1.5%'}}
          >
            Duckets
          </Typography>
        </div>
        {state.users.map(user => (
          <TopUserContainer
            key={`top_pixels_${user.id!}`}
            user={user}
            value="pixels"
            altText="duckets"
          />
        ))}
      </CardContent>
    </Card>
  );
}
