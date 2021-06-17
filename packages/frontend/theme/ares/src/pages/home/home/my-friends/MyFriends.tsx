import React, {useContext, useState} from 'react';
import './MyFriends.scss';
import {
  Avatar,
  sessionContext,
  useFetchUserByUsername,
} from '@instinct-web/core';

export function MyFriends() {
  const {user} = useContext(sessionContext);
  const [filter, setFilter] = useState('');
  const profile = useFetchUserByUsername(user!.username);

  if (!user) {
    return null;
  }

  const filteredFriends = profile?.friends.filter(_ =>
    _.username.toLowerCase().includes(filter)
  );

  return (
    <div className="card friends">
      <div className="card-body d-flex flex-column">
        <div className="d-inline-flex align-items-center">
          <span className="title flex-fill">Friends</span>
          <div id="search" className="input-group bg-white w-50">
            <input
              className="form-control"
              placeholder="Search..."
              type="search"
              maxLength={12}
              value={filter}
              onChange={e => setFilter(e.target.value)}
            />
            <div className="input-group-text bg-white" id="search-icon">
              <i className="fa fa-search" />
            </div>
          </div>
        </div>
        <div id="friends" className="row">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            {filteredFriends?.map(_ => (
              <div
                className="card friend mb-2 d-flex flex-row align-items-center"
                key={`friend_${_.id}`}
              >
                <Avatar look={_.figure} />

                <div className="user-info d-inline-flex flex-column text-ellipsis">
                  <span className="username text-ellipsis mb-0">
                    {_.username}
                  </span>
                  <span className="motto text-ellipsis">{_.motto}</span>
                </div>
              </div>
            ))}
          </div>
          {filteredFriends?.length === 0 && (
            <div className="d-inline-flex flex-column h-100 w-100 justify-content-center">
              <h4 className="align-self-center">No Friends</h4>
            </div>
          )}
          {profile?.friends?.length === 0 && (
            <div className="d-inline-flex flex-column h-100 w-100 justify-content-center">
              <h4 className="align-self-center">No Friends</h4>
            </div>
          )}
          {!profile && (
            <div className="d-inline-flex flex-column h-100 w-100 justify-content-center">
              <h4 className="align-self-center">Loading...</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
