import React from 'react';
import {Link, useRoute} from 'wouter';
import {SectionPosts} from './section-posts/SectionPosts';
import {UserLayout} from '../../../components/layout/user';
import {SectionHeader} from './section-header/SectionHeader';
import {SectionChildren} from './section-children/SectionChildren';
import {SectionContextProvider} from './section-context/SectionContextProvider';
import {Icon, setURL, useFetchForumSectionByID} from '@instinct-web/core';

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
          <div className="row">
            <div className="col-12">
              <Link to="/forum">
                <span style={{color: 'white', cursor: 'pointer', fontSize: 20}}>
                  <Icon type="caret-left" />
                  Go Back
                </span>
              </Link>
              <SectionHeader />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <SectionChildren />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <SectionPosts />
            </div>
          </div>
        </div>
      </SectionContextProvider>
    </UserLayout>
  );
}
