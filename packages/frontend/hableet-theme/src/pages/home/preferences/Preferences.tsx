import React from 'react';
import {EmailPreferences} from './tabs/email';
import {ProfilePreferences} from './tabs/profile';
import {SecurityPreferences} from './tabs/security';
import {Loading, setURL, Icon} from '@instinct-web/core';
import {UserLayout} from '../../../components/layout/user';
import {NavTabs} from '../../../components/nav-tabs/NavTabs';
import {MiniJumbotron} from '../../../components/mini-jumbotron/MiniJumbotron';

setURL('preferences', <PreferencesPage />);

export function PreferencesPage() {
  return (
    <UserLayout section="settings_">
      <Loading isLoading={false}>
        <MiniJumbotron>
          <h1>Account Settings</h1>
          <p>
            Set your preferences, update your email, and secure your account
            from your personal portal.
          </p>
        </MiniJumbotron>
        <div className="page-content">
          <div className="row">
            <NavTabs
              tabs={[
                {
                  text: <Icon type="lock" />,
                  children: <SecurityPreferences />,
                },
                {
                  text: <Icon type="envelope" />,
                  children: <EmailPreferences />,
                },
                {
                  text: <Icon type="user" />,
                  children: <ProfilePreferences />,
                },
              ]}
            />
          </div>
        </div>
      </Loading>
    </UserLayout>
  );
}
