import React from 'react';
import {Link, useRoute} from 'wouter';
import {PostHeader} from './post-header/PostHeader';
import {UserLayout} from '../../../components/layout/user';
import {PostContextProvider} from './post-context/PostContextProvider';
import {Icon, setURL, useFetchForumPostByID} from '@instinct-web/core';

setURL('forum/sections/:sectionID/posts/:postID', <ForumPost />);

export function ForumPost() {
  const [match, params] = useRoute('/forum/sections/:sectionID/posts/:postID');
  const forumPost = useFetchForumPostByID(
    Number(params!.sectionID),
    Number(params!.postID)
  );

  if (!forumPost) {
    return null;
  }

  return (
    <UserLayout>
      <PostContextProvider defaultPost={forumPost}>
        <div className="page-content">
          <div className="row">
            <div className="col-12">
              <Link to="/forum">
                <span style={{color: 'white', cursor: 'pointer', fontSize: 20}}>
                  <Icon type="caret-left" />
                  Go Back
                </span>
              </Link>
              <PostHeader />
            </div>
          </div>
        </div>
      </PostContextProvider>
    </UserLayout>
  );
}
