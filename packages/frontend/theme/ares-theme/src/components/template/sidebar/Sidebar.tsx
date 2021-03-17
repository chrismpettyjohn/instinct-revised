import './Sidebar.scss';
import React, {useContext} from 'react';
import {configContext} from '@instinct-web/core';
import {UserProfile} from './user-profile/UserProfile';
import {SiteNavigation} from './site-navigation/SiteNavigation';
import {Footer} from './footer/Footer';

export function Sidebar() {
  const {config} = useContext(configContext);

  return (
    <ul id="sidebar--nav" className="h-100 list-group list-group-flush">
      <li className="sidebar--brand d-flex justify-content-center">
        <img
          src="/images/logo.png"
          className="logo--big img-fluid d-xxl-block d-xl-block d-lg-block d-md-none d-sm-none"
        />
        <img
          src="/images/icons/ares64x64.png"
          className="img-fluid image-pixelated d-xxl-none d-xxl-none d-xl-none d-lg-none d-md-block d-sm-block"
        />
      </li>
      <li>
        <a className="sidebar--category text-ellipsis" />
        <div className="list-unstyled sidebar--category-nav">
          <a className="sidebar--entry list-group-item">
            <img
              src="/images/icons/sidebar/dashboard.png"
              className="image-pixelated"
            />
            <span className="text-ellipsis">Dashboaard</span>
          </a>
        </div>
      </li>
      <li>
        <a className="sidebar--category text-ellipsis"></a>
        <div className="list-unstyled sidebar--category-nav">
          <a className="sidebar--entry list-group-item">
            <img
              src="/images/icons/sidebar/news.png"
              className="image-pixelated"
            />
            <span className="text-ellipsis">hhhgg</span>
          </a>
          <a className="sidebar--entry list-group-item">
            <img
              src="/images/icons/sidebar/employees.png"
              className="image-pixelated"
            />
            <span className="text-ellipsis">employees</span>
          </a>
        </div>
      </li>
    </ul>
  );
}
