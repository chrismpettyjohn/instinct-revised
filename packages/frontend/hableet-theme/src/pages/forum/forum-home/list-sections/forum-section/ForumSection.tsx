import React from 'react';
import './ForumSection.scss';
import {ForumSectionProps} from './ForumSection.types';
import {Avatar} from '@instinct-web/core';

export function ForumSection({
  title,
  icon,
  description,
  latestPost,
}: ForumSectionProps) {
  return (
    <div className="forum-section">
      <div className="d-flex w-100">
        <i className={`fa fa-${icon} mr-4 mt-2`} style={{fontSize: 24}} />
        <div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <div className="latest-post">
          <div className="d-flex">
            <Avatar look={latestPost?.user?.figure} />
          </div>
        </div>
      </div>
    </div>
  );
}
