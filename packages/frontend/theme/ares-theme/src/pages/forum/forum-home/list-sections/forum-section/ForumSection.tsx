import React from 'react';
import {Link} from 'wouter';
import './ForumSection.scss';
import {Avatar} from '@instinct-web/core';
import {ForumSectionProps} from './ForumSection.types';
import {DeleteSectionModalButton} from '../delete-section-button/DeleteSectionButton';

export function ForumSection({section, onChange}: ForumSectionProps) {
  return (
    <div className="forum-section">
      <div className="d-flex w-100">
        <Link to={`/forum/sections/${section.id}`}>
          <i
            className={`fa fa-${section.icon} mr-4 mt-2`}
            style={{cursor: 'pointer', fontSize: 24}}
          />
        </Link>
        <div>
          <Link to={`/forum/sections/${section.id}`}>
            <h4 style={{cursor: 'pointer'}}>{section.title}</h4>
          </Link>
          <p>{section.description}</p>
        </div>
        <div className="latest-post">
          <div className="d-flex">
            <Avatar look={section.latestPost?.user?.figure} />
          </div>
        </div>
      </div>
      <hr className="text-white mt-2 mb-2" />
      <DeleteSectionModalButton sectionID={section.id} onChange={onChange} />
    </div>
  );
}
