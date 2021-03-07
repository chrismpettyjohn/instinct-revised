import React from 'react';
import {Icon, setURL} from '@instinct-web/core';
import {MailSettings} from './views/MailSettings';
import {GameSettings} from './views/GameSettings';
import {ServerSettings} from './views/ServerSettings';
import {GoogleSettings} from './views/GoogleSettings';
import {NavTabs} from '../components/nav-tabs/NavTabs';
import {SitePreferences} from './views/SitePreferences';
import {WebStoreSettings} from './views/WebStoreSettings';
import {Jumbotron} from '../components/jumbotron/Jumbotron';
import {AdminLayout} from '../components/admin-layout/AdminLayout';
import {WebsiteSettingsProvider} from './context/WebsiteSettings.provider';

setURL('admin/website', <WebsiteSettings />);

export function WebsiteSettings() {
  return (
    <AdminLayout permission="websiteShowAdminPanel">
      <Jumbotron style={{background: '#263238'}} title="Website Settings">
        <p>
          Here you can update your website and update your SWFs, maintenance,
          etc.
        </p>
      </Jumbotron>
      <div className="page-content">
        <WebsiteSettingsProvider>
          <NavTabs
            tabs={[
              {
                text: <Icon type="wrench" />,
                children: <SitePreferences />,
              },
              {
                text: <Icon type="server" />,
                children: <ServerSettings />,
              },
              {
                text: <Icon type="gamepad" />,
                children: <GameSettings />,
              },
              {
                text: <Icon type="robot" />,
                children: <GoogleSettings />,
              },
              {
                text: <Icon type="envelope-open" />,
                children: <MailSettings />,
              },
              {
                text: <Icon type="shopping-cart" />,
                children: <WebStoreSettings />,
              },
            ]}
          />
        </WebsiteSettingsProvider>
      </div>
    </AdminLayout>
  );
}
