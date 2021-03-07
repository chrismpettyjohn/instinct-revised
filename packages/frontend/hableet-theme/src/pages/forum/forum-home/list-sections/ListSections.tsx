import React from 'react';
import {Card} from '../../../../components/card/Card';
import {ForumSection} from './forum-section/ForumSection';

export function ListSections() {
  return (
    <Card header="List Sections">
      <ForumSection
        title="Announcements"
        icon="bullhorn"
        description="The latest updates regarding our services"
      />
      <ForumSection
        title="Discussion"
        icon="comments"
        description="The latest updates regarding our services"
      />
      <ForumSection
        title="Support"
        icon="question-circle"
        description="The latest updates regarding our services"
      />
      <ForumSection
        title="Off Topic / Random"
        icon="comment-alt"
        description="The latest updates regarding our services"
      />
    </Card>
  );
}
