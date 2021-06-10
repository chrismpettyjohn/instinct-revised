import React from 'react';
import {Link} from 'wouter';
import {Avatar} from '@instinct-web/core';
import {CommentAuthorProps} from './CommentAuthor.types';

export function CommentAuthor({children, user}: CommentAuthorProps) {
  return (
    <div className="article-author mt-3 w-100">
      <div className="d-flex">
        <div style={{width: 54}}>
          <Link href={`/profile/${user.username}`}>
            <Avatar look={user.figure} headOnly style={{cursor: 'pointer'}} />
          </Link>
        </div>
        <div style={{width: 'calc(100% - 104px)'}}>
          <h4 className="mt-2">
            <Link
              className="text-white"
              href={`/profile/${user.username}`}
              style={{textDecoration: 'none'}}
            >
              {user.username}
            </Link>
          </h4>
          <div>{children}</div>
        </div>
        {user.rank!.permissions.websiteShowStaff && (
          <div style={{width: 50}}>
            <img src="https://i.imgur.com/PU0iOsZ.png" />
          </div>
        )}
      </div>
    </div>
  );
}
