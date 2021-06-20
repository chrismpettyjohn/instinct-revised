import React, {useContext} from 'react';
import {Avatar, sessionContext} from '@instinct-web/core';
import {Jumbotron} from '../../../../components/jumbotron/Jumbotron';

export function UserContainer() {
  const {user} = useContext(sessionContext);

  if (!user) {
    return null;
  }

  return (
    <Jumbotron>
      <div className="row">
        <div className="col-xl-2 col-lg-2 d-xl-block d-lg-block d-none">
          <div className="user--avatar">
            <Avatar
              look={user.figure}
              action="wav"
              size="l"
              headDirection={2}
              direction={2}
            />
          </div>
        </div>

        <div className=" col-xl-10 col-lg-10 col-md-12">
          <div className=" d-flex flex-column ml-2 pt-4 h-100 justify-content-center">
            <h4 className=" w-100">{user.username}</h4>
            <p className="mb-0">
              Your last visit was on June 17, 2021 at 5:15pm
            </p>
            <span className=" w-100">
              Motto: <b>"{user.motto}"</b>
            </span>
          </div>
        </div>
      </div>
    </Jumbotron>
  );
}
