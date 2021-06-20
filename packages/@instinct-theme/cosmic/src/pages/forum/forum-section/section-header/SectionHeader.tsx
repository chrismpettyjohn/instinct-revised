import React, {useContext} from 'react';
import {Icon} from '@instinct-web/core';
import {sectionContext} from '../section-context/SectionContext';
import {AddPostModal} from '../../components/add-post-modal/AddPostModal';
import {MiniJumbotron} from '../../../../components/mini-jumbotron/MiniJumbotron';

export function SectionHeader() {
  const {description, icon, title} = useContext(sectionContext);
  return (
    <MiniJumbotron>
      <div className="row">
        <div className="col">
          <div className="d-flex">
            <Icon className="mr-4 mt-3" style={{fontSize: 45}} type={icon} />
            <div className="mt-1">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="col text-right">
          <AddPostModal />
        </div>
      </div>
    </MiniJumbotron>
  );
}
