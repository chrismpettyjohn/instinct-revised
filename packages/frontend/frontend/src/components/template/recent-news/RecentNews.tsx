import './RecentNews.scss';
import Moment from 'moment';
import {Link} from 'wouter';
import {Card} from '../../generic/card';
import {Article} from '@instinct-prj/interface';
import {Loading} from '../../generic/loading';
import React, {useEffect, useState} from 'react';
import {articleService} from '../../../services/article';
import {defaultRecentNewsState, RecentNewsState} from './';

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
