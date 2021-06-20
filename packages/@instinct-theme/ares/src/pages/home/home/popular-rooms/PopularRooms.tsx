import React from 'react';
import './PopularRoooms.scss';
import {Icon, useFetchPopularRooms} from '@instinct-web/core';

export function PopularRooms() {
  const rooms = useFetchPopularRooms();
  return (
    <>
      <span className="section--title">
        <i className="sprite sprite--dashboard-pinned-articles" />
        Popular Rooms
      </span>
      {!rooms && <Icon className="fa-spin" type="spinner" />}
      {rooms?.length === 0 && <p>There are no rooms</p>}
      {rooms?.map(_ => (
        <div className="card mb-3" key={`room_${_.id}`}>
          <div className="d-flex flex-row p-4">
            <img className="mr-3" src="/assets/images/icons/ares64x64.png" />
            <div className="flex-fill d-inline-flex flex-column text-ellipsis justify-content-center">
              <strong id="group--name" className="mb-0 text-ellipsis pr-2">
                {_.name}
                <span id="group--description" className="text-ellipsis pr-3">
                  {_.desc}
                </span>
              </strong>
              <div className="d-inline-flex justify-content-center align-items-center">
                <strong id="group--members" className="pr-1">
                  {_.currentUsers}
                </strong>
                <i className="sprite sprite--members" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
