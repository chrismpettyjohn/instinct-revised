import React from 'react';
import {ArticleCard} from '../article-card';
import {Skeleton} from '../../generic/skeleton';
import {Jumbotron} from '../../generic/jumbotron';
import {Container} from '../../generic/container';
import {useFetchAllArticles} from '../../../hooks/article';

export function ArticleList() {
  const articles = useFetchAllArticles();

  return (
    <>
      <Jumbotron title="Latest ListArticles">
        <p>Stay updated with our latest news!</p>
      </Jumbotron>
      <Container>
        {articles !== undefined ? (
          <div className="articles-container">
            {articles!.length === 0 && (
              <>
                <h3>Hmmm...</h3>
                <p>It looks like there aren't any articles.</p>
              </>
            )}
            {articles!.map(article => (
              <ArticleCard article={article} key={article.id} />
            ))}
          </div>
        ) : (
          <div className="articles-container row">
            <div className="col-4">
              <Skeleton height={274} width={330} />
            </div>
            <div className="col-4">
              <Skeleton height={274} width={330} />
            </div>
            <div className="col-4">
              <Skeleton height={274} width={330} />
            </div>
          </div>
        )}
      </Container>
    </>
  );
}
