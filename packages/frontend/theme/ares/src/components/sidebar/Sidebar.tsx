import './Sidebar.scss';
import React from 'react';
import NewsIcon from '../../public/images/icons/news.png';
import StaffIcon from '../../public/images/icons/employees.png';
import SettingsIcon from '../../public/images/icons/settings.png';
import DashboardIcon from '../../public/images/icons/dashboard.png';

export function Sidebar() {
  return (
    <div className="ares-sidebar">
      <ul className="h-100 list-group list-group-flush" id="sidebar--nav">
        <li className="sidebar--brand d-flex justify-content-center">
          <img
            className="logo--big img-fluid d-xxl-block d-xl-block d-lg-block d-md-none d-sm-none"
            src="https://habbo.im/assets/images/logo.png"
          />
        </li>
        <li>
          <a className="sidebar--category text-ellipsis">Home</a>
          <div className="list-unstyled sidebar--category-nav">
            <a className="sidebar--entry list-group-item active" href="/me">
              <img className="image-pixelated" src={DashboardIcon} />
              <span className="text-ellipsis">Dashboard</span>
            </a>
          </div>
          <div className="list-unstyled sidebar--category-nav">
            <a className="sidebar--entry list-group-item active" href="/me">
              <img className="image-pixelated" src={SettingsIcon} />
              <span className="text-ellipsis">Settings</span>
            </a>
          </div>
        </li>
        <li>
          <a className="sidebar--category text-ellipsis">Community</a>
          <div className="list-unstyled sidebar--category-nav">
            <a className="sidebar--entry list-group-item active" href="/me">
              <img className="image-pixelated" src={NewsIcon} />
              <span className="text-ellipsis">News</span>
            </a>
          </div>
          <div className="list-unstyled sidebar--category-nav">
            <a className="sidebar--entry list-group-item active" href="/me">
              <img className="image-pixelated" src={StaffIcon} />
              <span className="text-ellipsis">Staff Team</span>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
