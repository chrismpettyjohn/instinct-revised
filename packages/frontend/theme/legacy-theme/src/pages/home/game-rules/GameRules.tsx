import React from 'react';
import {setURL} from '@instinct-web/core';
import {Card} from '../../../components/card/Card';
import {UserLayout} from '../../../components/layout/user';
import {MiniJumbotron} from '../../../components/mini-jumbotron/MiniJumbotron';

setURL('rules', <GameRules />);

export function GameRules() {
  return (
    <UserLayout>
      <div className="page-content">
        <div className="row">
          <div className="col-12">
            <MiniJumbotron>
              <div className="row">
                <div className="col-8">
                  <h1>Hotel Rules</h1>
                  <b>
                    Last Updated: <b>Mar 05</b>
                  </b>
                  <p>
                    Please respect all rules and users. We provide Nex as a
                    service to you, the user in hopes to provide a fun and
                    safety environment for all.
                  </p>
                </div>
                <div className="col-4 text-right">
                  <img
                    src="/img/safety_tips.png"
                    height={140}
                    style={{marginTop: -10}}
                  />
                </div>
              </div>
            </MiniJumbotron>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Card>
              <h4> Nex Hotel Rules</h4>
              <p>
                While we want everybody to enjoy themselves to the fullest while
                playing Nex hotel we have implemented a few simple rules to keep
                it flowing as a friendly, tight-knit no drama community.
              </p>
              <p>
                Anyone who is found to have breached any of the said rules will
                be dealt with accordingly, consequences will depend on the
                breach / severity of the situation.
              </p>
              <p>
                1. Hacking/Ddosing - Anyone who attempts to manipulate Nex hotel
                or attack it will be IP banned & will not have the option to
                create another account, or appeal their an.
              </p>
              <p>
                2. Scamming - Scamming is not acceptable within our community,
                if you do choose to scam someone you will be banned, so please
                don't.
              </p>
              <p>
                3. Farming - account farming to boost currencies is NOT allowed,
                you cannot use another account to your own advantage, be pateint
                like everybody else.
              </p>
              <p>
                4. Exposing/threatening to expose another member - this will not
                be tolerated on our hotel, anything that even amounts to it will
                resuilt in a ban.
              </p>
              <p>
                5. Account sharing - for your own safety we cannot allow this to
                happen on Nex, it's for your own benefit so please refrain from
                doing so.
              </p>
              <p></p>
              6. Exchanging currencies for money, if you swap an in-game
              currency for money outside of Nex you will be banned.
              <p></p>
              <p>
                Betting - Any bets that happen within our hotel should be
                recorded to prevent scamming (You do so at your own risk)
                <small>
                  However, if a user has scammed you you MUST be able to supply
                  sufficient proof (without this we cant prove it and wont take
                  it any further).
                </small>
              </p>
              <p>
                Bans & how they work - You MAY be able to appeal your ban
                depending on why you were banned (You can only appeal ONCE) our
                staff team will review your appeal and then decide if whether or
                not to accept or decline your appeal.
              </p>
              <p>
                <b>
                  These are short but meaningful please obide by them; we do
                  this for you.
                </b>
              </p>
            </Card>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
