import React, {useContext} from 'react';
import {Card} from '../../../../components/card/Card';
import {sectionContext} from '../section-context/SectionContext';

export function SectionChildren() {
  const {childSections} = useContext(sectionContext);

  return (
    <Card className="w-100" header="Sub Sections">
      {childSections.length === 0 && <p>There are no sub sections</p>}
      {childSections.map(_ => (
        <div key={`child_section_${_.id}`}>{_.title}</div>
      ))}
    </Card>
  );
}
