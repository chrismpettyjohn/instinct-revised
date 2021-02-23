import './RecentNews.scss';
import Moment from 'moment';
import {Link} from 'wouter';
import {Article} from '@instinct-prj/interface';
import React, {useEffect, useState} from 'react';
import {Card} from '../../../../../components/card/Card';
import {articleService, Loading} from '@instinct-web/core';
import {defaultRecentNewsState, RecentNewsState} from './RecentNews.types';

export function RecentNews() {
  const [state, setState] = useState<RecentNewsState>(defaultRecentNewsState);

  useEffect(() => {
    async function fetchArticles(): Promise<void> {
      const articles: Article[] = await articleService.getAll();
      setState({
        articles,
        isLoading: false,
      });
    }

    setState(defaultRecentNewsState);
    fetchArticles();
  }, []);

  return (
    <Card header="Hotel Updates">
      <Loading isLoading={state.isLoading}>
        <div
          className="related-articles-container"
          style={{maxHeight: 200, overflowY: 'scroll'}}
        >
          {state.articles.map(article => (
            <Link
              className="related-article-container"
              key={article.id}
              to={`/community/news/${article.id}`}
            >
              <div
                className="related-article-thumbnail"
                style={{backgroundImage: `url(${article.thumbnailImage})`}}
              />
              <div className="related-article-details">
                <div className="related-article-title">{article.title}</div>
                <div className="related-article-date">
                  {Moment.unix(article.datePosted).format('MMM DD, YYYY')}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Loading>
    </Card>
  );
}
