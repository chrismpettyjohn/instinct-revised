import React from 'react';
import {Link} from 'wouter';
import {Icon} from '@instinct-web/core';
import {ChildSectionProps} from './ChildSection.types';
import {Card} from '../../../../../components/card/Card';

export function ChildSection({section}: ChildSectionProps) {
  return (
    <Link to={`/forum/sections/${section.id}`}>
      <Card
        style={{
          borderBottom: '2px solid red',
          cursor: 'pointer',
        }}
      >
        <div className="article-content">
          <div className="article-image">
            <Icon style={{fontSize: 35}} type={section.icon} />
          </div>
          <div className="ml-4">
            <div className="article-title">{section.title}</div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
