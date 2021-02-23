import React from 'react';
import {TopPixels} from './top-pixels';
import {TopPoints} from './top-points';
import {TopCredits} from './top-credits';
import {UserLayout} from '../../../components/layout/user';
import {MiniJumbotron, setURL} from '@instinct-web/core';

setURL('community/games', <Games />);

export function Games() {
  return (
    <UserLayout section="games_ranking">
      <div className="page-content">
        <div className="row">
          <div className="col-12">
            <MiniJumbotron>
              <h1>High Scores</h1>
              <p>Can you make it to the top?</p>
            </MiniJumbotron>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <TopCredits />
          </div>
          <div className="col-4">
            <TopPixels />
          </div>
          <div className="col-4">
            <TopPoints />
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
