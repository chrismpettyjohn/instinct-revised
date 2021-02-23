## Article Hooks

### Fetch All Articles
This hook will return an array of all news articles or undefined while waiting on the back-end.
<br/>
**Usage:**
```
import React from 'react';
import { Article } from 'instinct-interface';
import { useFetchAllArticles } from '@instinct-web/core';

export function ListArticles() {
  const articles: Article[] | undefined  = useFetchAllArticles();

  if (articles === undefined) {
    return <i className="fa fa-spin fa-spinner"/>
  }

  return (
    <>
      {
        articles?.map(_ => (
          <div key={_.id}>
            {_.title}
          </div>
        ))
      }
    </>
  )
}
```

### Fetch Article By ID
This hook will return a news article or return undefined while waiting on the back-end.
<br/>
**Usage:**
```
import React from 'react';
import { useRoute } from 'wouter';
import { Article } from 'instinct-interface';
import { useFetchArticleByID, setURL } from '@instinct-web/core';

setURL('articles/:articleID', <ViewArticle/>);

export function ViewArticle() {
  const [ matched, params ] = useRoute<{ articleID: string }, '/articles/:articleID');
  const article: Article | undefined  = useFetchArticleByID(params?.articleID);

  if (article === undefined) {
    return <i className="fa fa-spin fa-spinner"/>
  }

  return (
    <>
     {article.name}
    </>
  )
}
```

### Fetch All Categories
This hook will return an array of all news article categories or undefined while waiting on the back-end.
<br/>
**Usage:**
```
import React from 'react';
import { ArticleCategory } from 'instinct-interface';
import { useFetchAllNewsCategories } from '@instinct-web/core';

export function ListNewsCategories() {
  const categories: ArticleCategoriy[] | undefined  = useFetchAllNewsCategories();

  if (categories === undefined) {
    return <i className="fa fa-spin fa-spinner"/>
  }

  return (
    <>
      {
        categories?.map(_ => (
          <div key={_.id}>
            {_.title}
          </div>
        ))
      }
    </>
  )
}
