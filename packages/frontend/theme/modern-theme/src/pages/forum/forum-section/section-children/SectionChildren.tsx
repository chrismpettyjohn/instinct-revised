import React, {useContext} from 'react';
import {ChildSection} from './child-section/ChildSection';
import {sectionContext} from '../section-context/SectionContext';

export function SectionChildren() {
  const {childSections} = useContext(sectionContext);

  if (childSections?.length === 0) {
    return null;
  }

  return (
    <>
      <h3 className="text-white">Child Sections</h3>
      <div className="hotel-news row">
        {childSections?.map(_ => (
          <div className="col-6 mb-4" key={`section_${_.id}`}>
            <ChildSection section={_} />
          </div>
        ))}
      </div>
    </>
  );
}
