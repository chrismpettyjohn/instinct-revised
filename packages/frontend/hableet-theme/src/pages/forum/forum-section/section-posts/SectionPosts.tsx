import {Link} from 'wouter';
import React, {useContext} from 'react';
import {Card} from '../../../../components/card/Card';
import {AddPostModal} from './add-post-modal/AddPostModal';
import {Icon, useFetchForumPosts} from '@instinct-web/core';
import {sectionContext} from '../section-context/SectionContext';

export function SectionPosts() {
  const {id} = useContext(sectionContext);
  const posts = useFetchForumPosts(id);

  function getHeader() {
    return (
      <div className="row w-100">
        <div className="col">Posts</div>
        <div className="col text-right">
          <AddPostModal />
        </div>
      </div>
    );
  }

  return (
    <Card className="w-100" header={getHeader()}>
      {posts === undefined && <Icon type="spinner fa-spin" />}
      {posts?.length === 0 && <p>There are no posts</p>}
      {posts?.map(_ => (
        <Link key={`post_${_.id}`} to={`/forum/sections/${id}/posts/${_.id}`}>
          {_.title}
        </Link>
      ))}
    </Card>
  );
}
