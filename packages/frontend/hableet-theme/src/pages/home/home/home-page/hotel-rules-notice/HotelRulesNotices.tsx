import {Link} from 'wouter';
import React, {useContext} from 'react';
import {sessionContext} from '@instinct-web/core';
import {Card} from '../../../../../components/card/Card';

export function HotelRulesNotice() {
  const {user} = useContext(sessionContext);

  if (!user) return null;

  return (
    <Card>
      <div className="d-flex">
        <img src="/img/safety_tips.png" height={140} />
        <div className="ml-4 mt-3">
          <h4>Hey {user.username}, have you checked out our rules?</h4>
          <p>
            If you haven't please do so to stay up to date with the latest
            guidelines to follow when playing our game.
          </p>
        </div>
      </div>
      <Link href="/rules">
        <button className="btn btn-block btn-outline-info mt-4">
          Read The Rules
        </button>
      </Link>
    </Card>
  );
}
