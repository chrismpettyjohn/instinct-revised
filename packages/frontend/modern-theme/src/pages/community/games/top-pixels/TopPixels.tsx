import {Link} from 'wouter';
import {User} from '@instinct-prj/interface';
import React, {useEffect, useState} from 'react';
import {GamesCardState, defaultGamesCardState} from '../Games.types';
import {Avatar, Card, Icon, userService} from '@instinct-prj/frontend';

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
          <Icon type="duck" />
        </div>
        <div className="col-6 text-right">Pixels</div>
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
                <b>{user.pixels}</b> Pixels
              </h5>
            </div>
          </div>
        </Link>
      ))}
    </Card>
  );
}
