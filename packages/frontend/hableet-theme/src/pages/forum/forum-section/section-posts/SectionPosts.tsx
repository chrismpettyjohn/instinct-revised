import React, {useContext} from 'react';
import {Card} from '../../../../components/card/Card';
import {Icon, useFetchForumPosts} from '@instinct-web/core';
import {sectionContext} from '../section-context/SectionContext';

export function SectionPosts() {
  const {id} = useContext(sectionContext);
  const posts = useFetchForumPosts(id);

  return (
    <Card className="w-100" header="Section Posts">
      {posts === undefined && <Icon type="spinner fa-spin" />}
      {posts?.length === 0 && <p>There are no posts</p>}
      {posts?.map(_ => (
        <div key={`post_${_.id}`}>{_.title}</div>
      ))}
    </Card>
  );
}
