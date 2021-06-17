import React from 'react';
import './MyFriends.scss';
import {Avatar} from '@instinct-web/core';

export function MyFriends() {
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
            />
            <div className="input-group-text bg-white" id="search-icon">
              <i className="fa fa-search" />
            </div>
          </div>
        </div>

        <div id="friends" className="row">
          <div className="d-inline-flex flex-column h-100 w-100 justify-content-center">
            <h3 className="align-self-center">
              <i className="fa unlink" />
            </h3>
            <h4 className="align-self-center">Friend</h4>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="card friend mb-2 d-flex flex-row align-items-center">
              <Avatar look="lg-275-80.hd-185-2.ch-3050-78-77.hr-831-45" />

              <div className="user-info d-inline-flex flex-column text-ellipsis">
                <span className="username text-ellipsis mb-0">Bob</span>
                <span className="motto text-ellipsis">
                  Riding the wave of life
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
