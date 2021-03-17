import {User} from '@instinct-prj/interface';
import React, {useEffect, useState} from 'react';
import {Icon, userService} from '@instinct-web/core';
import {Card, CardContent, Typography} from '@material-ui/core';
import {GamesCardState, defaultGamesCardState} from '../Games.types';
import {TopUserContainer} from '../components/top-user-container/TopUserContainer';

export function TopCredits() {
  const [state, setState] = useState<GamesCardState>(defaultGamesCardState);

  useEffect(() => {
    async function fetchMostCredits(): Promise<void> {
      const users: User[] = await userService.getMostCredits();
      setState({
        users,
        showSpinner: false,
      });
    }
    fetchMostCredits();
  }, []);

  return (
    <Card style={{background: '#272B34', color: 'white'}}>
      <CardContent>
        <div style={{display: 'flex'}}>
          <Icon style={{color: '#E2AE1C', marginRight: '2.5%'}} type="coins" />
          <Typography
            variant="h6"
            style={{color: '#E2AE1C', marginTop: '-1.5%'}}
          >
            Credits
          </Typography>
        </div>
        {state.users.map(user => (
          <TopUserContainer
            key={`top_credits_${user.id!}`}
            user={user}
            value="credits"
          />
        ))}
      </CardContent>
    </Card>
  );
}
