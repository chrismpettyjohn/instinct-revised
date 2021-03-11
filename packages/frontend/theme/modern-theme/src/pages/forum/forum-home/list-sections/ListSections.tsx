import React, {useState} from 'react';
import {Card} from '../../../../components/card/Card';
import {useFetchForumSections} from '@instinct-web/core';
import {ForumSection} from './forum-section/ForumSection';
import {AddSectionModal} from './add-section-modal/AddSectionModal';

export function ListSections() {
  const [refresh, setRefresh] = useState(0);
  const forumSections = useFetchForumSections(undefined, refresh);

  function onChange() {
    setRefresh(_ => _ + 1);
  }

  function getHeader() {
    return (
      <div className="row w-100">
        <div className="col">Sections</div>
        <div className="col text-right">
          <AddSectionModal onChange={onChange} />
        </div>
      </div>
    );
  }

  return (
    <Card header={getHeader()}>
      {forumSections?.map(_ => (
        <ForumSection key={_.id} section={_} onChange={onChange} />
      ))}
    </Card>
  );
}
