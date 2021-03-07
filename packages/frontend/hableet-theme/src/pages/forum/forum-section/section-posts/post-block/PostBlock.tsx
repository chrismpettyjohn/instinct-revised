import React from 'react';
import Moment from 'moment';
import {Link} from 'wouter';
import {Avatar} from '@instinct-web/core';
import {PostBlockProps} from './PostBlock.types';
import {Card} from '../../../../../components/card/Card';

export function PostBlock({post}: PostBlockProps) {
  return (
    <Link to={`/forum/sections/${post.sectionID}/posts/${post.id}`}>
      <Card
        style={{
          borderBottom: '2px solid red',
          cursor: 'pointer',
        }}
      >
        <div className="article-content">
          <div className="article-image">
            <Avatar look={post.user.figure} />
          </div>
          <div className="ml-4">
            <div className="article-title">{post.title}</div>
            <div className="article-body">
              Posted{' '}
              <span>{Moment(post.createdAt).format('MMMM DD, YYYY')}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
