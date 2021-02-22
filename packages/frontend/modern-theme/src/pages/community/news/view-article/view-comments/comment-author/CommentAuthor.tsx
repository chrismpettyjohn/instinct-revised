import {Link} from 'wouter';
import React, {useContext} from 'react';
import {CommentAuthorProps} from './CommentAuthor.types';
import {Avatar, configContext} from '@instinct-prj/frontend';

export function CommentAuthor({children, user}: CommentAuthorProps) {
  const {config} = useContext(configContext);
  return (
    <div className="article-author mt-3 w-100" key={`comment_${_.id}`}>
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
        <div style={{width: 50}}>
          <img src={`${config.rankBadgeURL}/${user.rank!.badge}.gif`} />
        </div>
      </div>
    </div>
  );
}
