import {User} from '@instinct-prj/interface';
import React, {useEffect, useState} from 'react';
import {Link} from 'wouter';
import {Avatar, userService, Card, Icon} from '@instinct-prj/frontend';
import {GamesCardState, defaultGamesCardState} from '../Games.types';

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
          <Icon type="coins" />
        </div>
        <div className="col-6 text-right">Credits</div>
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
                <b>{user.credits}</b> Credits
              </h5>
            </div>
          </div>
        </Link>
      ))}
    </Card>
  );
}
