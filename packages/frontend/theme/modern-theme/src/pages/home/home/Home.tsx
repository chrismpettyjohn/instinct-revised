import React from 'react';
import {setURL} from '@instinct-web/core';
import Typography from '@material-ui/core/Typography';
import {UserLayout} from '../../../components/layout/user';

setURL('me', <Home />);

export function Home() {
  return (
    <UserLayout>
      <div className="row">
        <Typography variant="h4">Story</Typography>
      </div>
    </UserLayout>
  );
}
