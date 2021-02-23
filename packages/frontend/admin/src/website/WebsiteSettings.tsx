import React from 'react';
import {GameSettings} from './views/GameSettings';
import {ServerSettings} from './views/ServerSettings';
import {SitePreferences} from './views/SitePreferences';
import {WebsiteSettingsProvider} from './context/WebsiteSettings.provider';
import {
  AdminLayout,
  Container,
  Icon,
  Jumbotron,
  NavTabs,
  setURL,
} from '@instinct-web/core';
import {GoogleSettings} from './views/GoogleSettings';
import {MailSettings} from './views/MailSettings';

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
      <Container>
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
            ]}
          />
        </WebsiteSettingsProvider>
      </Container>
    </AdminLayout>
  );
}
