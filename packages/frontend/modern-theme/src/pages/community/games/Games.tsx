import React from 'react';
import {TopPixels} from './top-pixels';
import {TopPoints} from './top-points';
import {TopCredits} from './top-credits';
import {
  Container,
  MiniJumbotron,
  Row,
  UserLayout,
  setURL,
} from '@instinct-prj/frontend';

setURL('community/games', <Games />);

export function Games() {
  return (
    <UserLayout section="games_ranking">
      <Container>
        <Row>
          <div className="col-12">
            <MiniJumbotron>
              <h1>High Scores</h1>
              <p>Can you make it to the top?</p>
            </MiniJumbotron>
          </div>
        </Row>
        <Row>
          <div className="col-4">
            <TopCredits />
          </div>
          <div className="col-4">
            <TopPixels />
          </div>
          <div className="col-4">
            <TopPoints />
          </div>
        </Row>
      </Container>
    </UserLayout>
  );
}
