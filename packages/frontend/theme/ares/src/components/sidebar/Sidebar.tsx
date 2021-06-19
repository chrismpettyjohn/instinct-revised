import './Sidebar.scss';
import {Link} from 'wouter';
import React, {useContext} from 'react';
import {configContext} from '@instinct-web/core';
import NewsIcon from '../../public/images/icons/news.png';
import LogoutIcon from '../../public/images/icons/logout.png';
import StaffIcon from '../../public/images/icons/employees.png';
import DashboardIcon from '../../public/images/icons/dashboard.png';

export function Sidebar() {
  const {config} = useContext(configContext);
  return (
    <div className="ares-sidebar">
      <ul className="h-100 list-group list-group-flush" id="sidebar--nav">
        <li className="sidebar--brand d-flex justify-content-center">
          <img
            className="logo--big img-fluid d-xxl-block d-xl-block d-lg-block d-md-none d-sm-none"
            src={config.logoURL}
          />
        </li>
        <li>
          <a className="sidebar--category text-ellipsis">Home</a>
          <div className="list-unstyled sidebar--category-nav">
            <Link className="sidebar--entry list-group-item active" href="/me">
              <img className="image-pixelated" src={DashboardIcon} />
              <span className="text-ellipsis">Dashboard</span>
            </Link>
          </div>
        </li>
        <li>
          <a className="sidebar--category text-ellipsis">Community</a>
          <div className="list-unstyled sidebar--category-nav">
            <Link
              className="sidebar--entry list-group-item active"
              href="/news"
            >
              <img className="image-pixelated" src={NewsIcon} />
              <span className="text-ellipsis">News</span>
            </Link>
          </div>
          <div className="list-unstyled sidebar--category-nav">
            <Link
              className="sidebar--entry list-group-item active"
              href="/staff"
            >
              <img className="image-pixelated" src={StaffIcon} />
              <span className="text-ellipsis">Staff Team</span>
            </Link>
          </div>
        </li>
        <li className="mt-auto mb-3">
          <div className="list-unstyled sidebar--category-nav">
            <Link className="sidebar--entry list-group-item" href="/logout">
              <img src={LogoutIcon} className="image-pixelated" />
              <span
                className="text-ellipsis"
                style={{verticalAlign: 'inherit'}}
              >
                Sign out
              </span>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
