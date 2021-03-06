import {User} from '@instinct-prj/interface';
import React, {useEffect, useState} from 'react';
import {Icon, userService} from '@instinct-web/core';
import {Card} from '../../../../components/card/Card';
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

  function getHeader() {
    return (
      <div className="row">
        <div className="col-6">
          <Icon style={{color: '#BA7CC2'}} type="duck" />
        </div>
        <div className="col-6 text-right" style={{color: '#BA7CC2'}}>
          Duckets
        </div>
      </div>
    );
  }

  return (
    <Card header={getHeader()}>
      {state.users.map(user => (
        <TopUserContainer
          key={`top_pixels_${user.id!}`}
          user={user}
          value="pixels"
          altText="duckets"
        />
      ))}
    </Card>
  );
}
