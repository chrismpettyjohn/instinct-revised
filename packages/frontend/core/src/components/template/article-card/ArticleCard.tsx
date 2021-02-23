import React from 'react';
import {Link} from 'wouter';
import {ArticleCardProps} from './';

export function ArticleCard({article}: ArticleCardProps) {
  return (
    <div className="article-container">
      <Link to={`/community/news/${article.id}`}>
        <a
          className="article-content pixelated"
          style={{backgroundImage: `url('${article.thumbnailImage}')`}}
        >
          <div className="article-header">
            <div className="article-category">{article.category.name}</div>
            <div
              className="article-separation"
              style={{backgroundColor: '#f28600'}}
            />
            <div className="article-title">{article.title}</div>
          </div>
        </a>
      </Link>
    </div>
  );
}
