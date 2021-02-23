import React, {useState} from 'react';
import './ViewArticle.scss';
import {Link, useRoute} from 'wouter';
import {ArticleBody} from './article-body/ArticleBody';
import {ArticleHeader} from './article-header/ArticleHeader';
import {
  Container,
  Loading,
  RecentNews,
  setURL,
  useFetchArticleByID,
  UserLayout,
  Icon,
} from '@instinct-web/core';
import {ViewComments} from './view-comments/ViewComments';

setURL('community/news/:articleID', <ViewArticle />);

export function ViewArticle() {
  const [refresh, setRefresh] = useState(0);
  const [match, params] = useRoute<{articleID: string}>(
    '/community/news/:articleID'
  );
  const article = useFetchArticleByID(params!.articleID, refresh);

  return (
    <UserLayout section="article">
      <Loading isLoading={false}>
        <Container>
          <div className="row">
            <div className="col-12">
              <Link to="/community/news">
                <div style={{cursor: 'pointer'}}>
                  <Icon className="fa-4x" type="caret-left" />
                </div>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ArticleHeader article={article} />
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <ArticleBody article={article} />
              <ViewComments
                article={article}
                onChange={() => setRefresh(_ => _ + 1)}
              />
            </div>
            <div className="col-4">
              <RecentNews />
            </div>
          </div>
        </Container>
      </Loading>
    </UserLayout>
  );
}
