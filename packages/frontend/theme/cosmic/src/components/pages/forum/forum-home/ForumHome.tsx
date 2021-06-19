import React from 'react';
import {Column, setURL} from '@instinct-web/core';
import {ListSections} from './list-sections/ListSections';
import {UserLayout} from '../../../components/layout/user';
import {RecentActivity} from './recent-activity/RecentActivity';

setURL('forum', <ForumHome />);

export function ForumHome() {
  return (
    <UserLayout>
      <div className="page-content">
        <Column side="left">
          <ListSections />
        </Column>
        <Column side="right">
          <RecentActivity />
        </Column>
      </div>
    </UserLayout>
  );
}
