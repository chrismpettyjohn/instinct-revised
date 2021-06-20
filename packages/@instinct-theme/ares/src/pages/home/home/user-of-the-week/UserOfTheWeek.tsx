import React from 'react';
import './UserOfTheWeek.scss';
import {Avatar, Icon, useFetchUserOfTheWeek} from '@instinct-web/core';

export function UserOfTheWeek() {
  const usersOfTheWeek = useFetchUserOfTheWeek();

  return (
    <>
      <span className="section--title">
        <i className="sprite sprite--dashboard-pinned-articles" />
        User of the Week
      </span>
      <div className="card d-flex flex-column p-4 mb-4 user-of-the-week-card">
        {!usersOfTheWeek && <Icon className="fa-spin" type="spinner" />}
        {usersOfTheWeek?.length === 0 && (
          <p>There are no users selected this week</p>
        )}
        {usersOfTheWeek?.map(_ => (
          <div
            className="card-body d-flex flex-row align-content-center"
            key={`uotw_${_.id}`}
          >
            <Avatar
              className="image-pixelated img-fluid"
              look={_.figure}
              direction={2}
              headDirection={2}
              size="l"
            />
            <div className="d-inline-flex flex-column align-content-center text-ellipsis">
              <span className="user--username">{_.username}</span>
              <span className="user--motto pt-1 text-ellipsis">
                "{_.motto}"
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
