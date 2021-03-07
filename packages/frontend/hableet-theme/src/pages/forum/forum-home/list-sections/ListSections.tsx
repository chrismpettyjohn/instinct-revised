import React from 'react';
import {Card} from '../../../../components/card/Card';
import {useFetchForumSections} from '@instinct-web/core';
import {ForumSection} from './forum-section/ForumSection';

export function ListSections() {
  const forumSections = useFetchForumSections();

  return (
    <Card header="List Sections">
      {forumSections?.map(_ => (
        <ForumSection key={_.id} section={_} />
      ))}
    </Card>
  );
}
