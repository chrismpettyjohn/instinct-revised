import React from 'react';
import ReactMarkdown from 'react-markdown';
import {Skeleton} from '@instinct-web/core';
import {ArticleBodyProps} from './ArticleBody.types';
import {Card} from '../../../../../components/old/card/Card';
import {CommentAuthor} from '../view-comments/comment-author/CommentAuthor';

export function ArticleBody({article}: ArticleBodyProps) {
  return (
    <Card style={{fontSize: 18}}>
      {article?.content ? (
        <>
          <ReactMarkdown>{article.content}</ReactMarkdown>
          <div style={{width: '50%'}}>
            <CommentAuthor user={article.author}>
              {article.author.rank!.name}
            </CommentAuthor>
          </div>
        </>
      ) : (
        <>
          <Skeleton height={20} isLoading />
          <Skeleton height={20} isLoading />
          <Skeleton height={20} isLoading />
          <Skeleton height={20} isLoading />
        </>
      )}
      <br />
    </Card>
  );
}
