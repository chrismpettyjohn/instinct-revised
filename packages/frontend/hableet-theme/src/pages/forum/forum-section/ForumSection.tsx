import React from 'react';
import {Link, useRoute} from 'wouter';
import {SectionTools} from './section-tools/SectionTools';
import {SectionPosts} from './section-posts/SectionPosts';
import {UserLayout} from '../../../components/layout/user';
import {SectionHeader} from './section-header/SectionHeader';
import {SectionContextProvider} from './section-context/SectionContextProvider';
import {
  Column,
  Icon,
  setURL,
  useFetchForumSectionByID,
} from '@instinct-web/core';

setURL('forum/sections/:sectionID', <ForumSection />);

export function ForumSection() {
  const [match, params] = useRoute('/forum/sections/:sectionID');
  const forumSection = useFetchForumSectionByID(Number(params!.sectionID));

  if (!forumSection) {
    return null;
  }

  return (
    <UserLayout>
      <SectionContextProvider defaultSection={forumSection}>
        <div className="page-content">
          <Link to="/forum">
            <span style={{color: 'white', cursor: 'pointer', fontSize: 20}}>
              <Icon type="caret-left" />
              Go Back
            </span>
          </Link>
          <SectionHeader />
          <Column side="left">
            <SectionPosts />
          </Column>
          <Column side="right">
            <SectionTools />
          </Column>
        </div>
      </SectionContextProvider>
    </UserLayout>
  );
}
