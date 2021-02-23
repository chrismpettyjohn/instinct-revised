import {Link} from 'wouter';
import {User} from '@instinct-prj/interface';
import React, {useEffect, useState} from 'react';
import {Card} from '../../../../components/card/Card';
import {Avatar, Icon, userService} from '@instinct-web/core';
import {GamesCardState, defaultGamesCardState} from '../Games.types';

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
        <Link
          className="top-user-container"
          key={user.id}
          href={`/profile/${user.username}`}
        >
          <div className="row">
            <div className="col-4">
              <Avatar look={user.figure} headOnly />
            </div>
            <div className="col-8 text-right">
              <h3>{user.username}</h3>
              <h5 style={{marginTop: -10}}>
                <b>{user.points}</b> Points
              </h5>
            </div>
          </div>
        </Link>
      ))}
    </Card>
  );
}
