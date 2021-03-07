import React, {useContext} from 'react';
import {PostBlock} from './post-block/PostBlock';
import {Icon, useFetchForumPosts} from '@instinct-web/core';
import {sectionContext} from '../section-context/SectionContext';

export function SectionPosts() {
  const {id} = useContext(sectionContext);
  const posts = useFetchForumPosts(id);

  return (
    <>
      <h3 className="text-white">Posts in this section</h3>
      <div className="hotel-news row">
        {posts === undefined && <Icon type="spinner fa-spin" />}
        {posts?.length === 0 && <p>There are no posts</p>}
        {posts?.map(_ => (
          <div className="col-6 mb-4" key={`post_${_.id}`}>
            <PostBlock post={_} />
          </div>
        ))}
      </div>
    </>
  );
}
