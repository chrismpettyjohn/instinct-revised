import {User} from '@instinct-prj/interface';
import React, {useEffect, useState} from 'react';
import {Link} from 'wouter';
import {Card} from '../../../../components/card/Card';
import {Avatar, Icon, userService} from '@instinct-web/core';
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

  function getHeader() {
    return (
      <div className="row">
        <div className="col-6">
          <Icon style={{color: '#E2AE1C'}} type="coins" />
        </div>
        <div className="col-6 text-right" style={{color: '#E2AE1C'}}>
          Credits
        </div>
      </div>
    );
  }

  return (
    <Card header={getHeader()}>
      {state.users.map(user => (
        <TopUserContainer
          key={`top_credits_${user.id!}`}
          user={user}
          value="credits"
        />
      ))}
    </Card>
  );
}
