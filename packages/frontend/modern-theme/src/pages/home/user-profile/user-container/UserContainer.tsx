import Moment from 'moment';
import React from 'react';
import {UserProfileWidgetProps} from '../';
import {Avatar, Icon} from '@instinct-prj/frontend';
import {DetailsContainer} from './details-container';

export function UserContainer({profile}: UserProfileWidgetProps) {
  return (
    <aside id="profile" className="default-section">
      <div className="profile-header">
        <div
          className="header-content flex-container flex-vertical-center"
          style={{backgroundColor: '#47AEE'}}
        >
          <Avatar
            look={profile?.user.figure || ''}
            direction={2}
            headDirection={2}
            size="l"
          />
          <div className="header-details">
            <div className="header-title">{profile?.user.username}</div>
            <div className="header-description" />
            <div className="profile-icon">
              <img
                alt="credits"
                src="/img/icons/credits.png"
                style={{position: 'initial'}}
              />
              &nbsp;
              {profile?.user.credits.toLocaleString()}
            </div>
            <div className="profile-icon">
              <img
                alt="duckets"
                src="/img/icons/duckets.png"
                style={{position: 'initial'}}
              />
              &nbsp;
              {profile?.user.pixels.toLocaleString()}
            </div>
            <div className="profile-icon">
              <img
                alt="diamonds"
                src="/img/icons/diamonds.png"
                style={{position: 'initial'}}
              />
              &nbsp;{profile?.user.points.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
      <div className="profile-content">
        <div className="details-container">
          <Icon type="hotel" />
          Currently&nbsp;
          {profile?.user.online ? (
            <strong className="online">online</strong>
          ) : (
            <strong className="offline">offline</strong>
          )}
        </div>
        <DetailsContainer icon="user" header="Registered Since">
          {Moment(profile?.user.joinDate).format('MM/DD/YYYY')}
        </DetailsContainer>
        <DetailsContainer icon="door-open" header="Last Logged In">
          {Moment(profile?.user.lastLoginDate).format('MM/DD/YYYY')}
        </DetailsContainer>
        <DetailsContainer icon="headphones-alt">
          <a
            className="youtube-link"
            href="https://youtu.be/GfxcnX7XWfg"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://youtu.be/GfxcnX7XWfg
          </a>
        </DetailsContainer>
      </div>
    </aside>
  );
}
