import {Link} from 'wouter';
import {Article} from '@instinct-prj/interface';
import React, {useEffect, useState} from 'react';
import {articleService} from '@instinct-web/core';
import {Card, CardContent, Typography, Paper} from '@material-ui/core';
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
    <Card style={{background: '#272B34', color: 'white'}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Recent News
        </Typography>
        <div style={{maxHeight: 200, overflowY: 'scroll'}}>
          {state.articles.map(article => (
            <Link key={article.id} to={`/community/news/${article.id}`}>
              <Paper
                elevation={3}
                style={{
                  background: '#1e2128',
                  cursor: 'pointer',
                  color: 'white',
                  marginBottom: '2.5%',
                }}
              >
                <div style={{display: 'flex'}}>
                  <img
                    src={article.thumbnailImage}
                    style={{width: 75, height: 75}}
                  />
                  <div style={{padding: 4}}>
                    <Typography variant="subtitle1">{article.title}</Typography>
                    <Typography variant="body2y">
                      {article.description}
                    </Typography>
                  </div>
                </div>
              </Paper>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
