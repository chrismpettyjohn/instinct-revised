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
        <div className="page-content">
          <div className="row">
            <div className="col-12">
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
        </div>
      </Loading>
    </UserLayout>
  );
}
