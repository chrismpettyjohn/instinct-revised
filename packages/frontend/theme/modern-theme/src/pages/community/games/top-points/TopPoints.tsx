import {User} from '@instinct-prj/interface';
import React, {useEffect, useState} from 'react';
import {Icon, userService} from '@instinct-web/core';
import {Card, CardContent, Typography} from '@material-ui/core';
import {GamesCardState, defaultGamesCardState} from '../Games.types';
import {TopUserContainer} from '../components/top-user-container/TopUserContainer';

export function TopPoints() {
  const [state, setState] = useState<GamesCardState>(defaultGamesCardState);

  useEffect(() => {
    async function fetchMostPoints(): Promise<void> {
      const users: User[] = await userService.getMostPoints();
      setState({
        users,
        showSpinner: false,
      });
    }
    fetchMostPoints();
  }, []);

  return (
    <Card style={{background: '#272B34', color: 'white'}}>
      <CardContent>
        <div style={{display: 'flex'}}>
          <Icon
            style={{color: '#92C3F6', marginRight: '2.5%'}}
            type="diamond"
          />
          <Typography
            variant="h6"
            style={{color: '#92C3F6', marginTop: '-1.5%'}}
          >
            Diamonds
          </Typography>
        </div>
        {state.users.map(user => (
          <TopUserContainer
            key={`top_points_${user.id!}`}
            user={user}
            value="points"
            altText="diamonds"
          />
        ))}
      </CardContent>
    </Card>
  );
}
