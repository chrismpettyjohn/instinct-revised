import React from 'react';
import Moment from 'moment';
import {Link} from 'wouter';
import {Avatar} from '@instinct-web/core';
import {PhotoContainerProps} from './PhotoContainer.types';

export function PhotoContainer({photo}: PhotoContainerProps) {
  return (
    <>
      <div className="photo-container">
        <div className="photo-content">
          <div
            className="photo-picture"
            style={{backgroundImage: `url(${photo.imagePath})`}}
          />
          <Link
            className="photo-meta flex-container flex-vertical-center"
            to={`/profile/${photo.user!.username}`}
          >
            <div className="photo-meta-left-side">
              <Avatar look={photo.user!.figure} />
            </div>
            <div className="photo-meta-right-side">
              <div className="creator-name">{photo.user!.username}</div>
              <div className="published-date">
                {Moment(photo.createdAt).format('MM/DD/YY')}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
