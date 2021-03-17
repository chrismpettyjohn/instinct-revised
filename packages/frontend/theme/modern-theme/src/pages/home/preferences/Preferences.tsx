import {setURL} from '@instinct-web/core';
import {EmailPreferences} from './tabs/email';
import React, {ReactNode, useState} from 'react';
import {ProfilePreferences} from './tabs/profile';
import {SecurityPreferences} from './tabs/security';
import {UserLayout} from '../../../components/layout/user';
import {
  Card,
  CardContent,
  Grid,
  Tabs,
  Tab,
  Typography,
  Paper,
} from '@material-ui/core';

setURL('preferences', <PreferencesPage />);

export function PreferencesPage() {
  const [value, setValue] = useState(0);

  const views: Array<{label: string; view: ReactNode}> = [
    {
      label: 'Contact',
      view: <EmailPreferences />,
    },
    {
      label: 'Security',
      view: <SecurityPreferences />,
    },
    {
      label: 'Profile',
      view: <ProfilePreferences />,
    },
  ];

  return (
    <UserLayout>
      <Grid container justify="center">
        <Grid item xs={8}>
          <Card
            style={{background: '#272B34', color: 'white', width: '100%'}}
            raised
          >
            <CardContent>
              <Typography variant="h6" component="h2">
                Security and Privacy
              </Typography>
              <Paper square>
                <Tabs
                  indicatorColor="primary"
                  textColor="primary"
                  value={value}
                  onChange={(e, v) => setValue(v)}
                >
                  {views.map((view, index) => (
                    <Tab key={`tab_${index}`} label={view.label} />
                  ))}
                </Tabs>
                <div style={{marginTop: '2.5%', padding: 10}}>
                  {views[value].view}
                </div>
              </Paper>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </UserLayout>
  );
}
