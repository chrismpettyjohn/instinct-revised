import React from 'react';
import {useLocation} from 'wouter';
import {toast} from 'react-toastify';
import {ArticleDTO} from '@instinct-prj/interface';
import {NewsArticleEditor} from './editor/NewsArticleEditor';
import {articleService, setURL} from '@instinct-web/core';

setURL('admin/news/articles/create', <CreateNewsArticle />);

export function CreateNewsArticle() {
  const [location, setLocation] = useLocation();

  async function onSave(article: ArticleDTO): Promise<void> {
    try {
      const newArticle = await articleService.create(article);
      toast.success(`${article.title} has been published successfully`);
      setLocation(`/admin/news/articles/${newArticle.id!}`);
    } catch {
      toast.error(`${article.title} could not be published at this time`);
    }
  }

  return <NewsArticleEditor onSave={onSave} />;
}
