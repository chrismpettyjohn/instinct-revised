import {User} from '@instinct-prj/interface';
import React, {useEffect, useState} from 'react';
import {Card} from '../../../../components/card/Card';
import {Icon, userService} from '@instinct-web/core';
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

  function getHeader() {
    return (
      <div className="row">
        <div className="col-6">
          <Icon type="gamepad" />
        </div>
        <div className="col-6 text-right">Points</div>
      </div>
    );
  }

  return (
    <Card header={getHeader()}>
      {state.users.map(user => (
        <TopUserContainer
          key={`top_points_${user.id!}`}
          user={user}
          value="points"
        />
      ))}
    </Card>
  );
}
