import React from 'react';
import Moment from 'moment';
import {ArticleHeaderProps} from './ArticleHeader.types';
import {MiniJumbotron, Skeleton} from '@instinct-prj/frontend';

export function ArticleHeader({article}: ArticleHeaderProps) {
  return (
    <MiniJumbotron
      className="text-center"
      style={{
        backgroundImage: `url('${
          article?.headerImage ??
          'https://images.habbo.com/web_images/habbo-web-articles/lpromo_hween20.png'
        }')`,
        backgroundSize: '100%',
      }}
    >
      <h1>{article?.title ?? <Skeleton width={350} isLoading />}</h1>
      {article?.category ? (
        <p>
          {article?.category.name} -{' '}
          {Moment.unix(article?.datePosted || 0).format('MMMM DD, YYYY')}
        </p>
      ) : (
        <Skeleton width={350} isLoading />
      )}
    </MiniJumbotron>
  );
}
