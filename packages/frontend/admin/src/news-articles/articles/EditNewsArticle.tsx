import React from 'react';
import {useRoute} from 'wouter';
import {toast} from 'react-toastify';
import {ArticleDTO} from '@instinct-prj/interface';
import {NewsArticleEditor} from './editor/NewsArticleEditor';
import {articleService, setURL, useFetchArticleByID} from '@instinct-web/core';

setURL('admin/news/articles/:articleID', <EditNewsArticle />);

export function EditNewsArticle() {
  const [matched, params] = useRoute<{articleID: string}>(
    '/admin/news/articles/:articleID'
  );
  const article = useFetchArticleByID(params!.articleID);

  async function onSave(article: ArticleDTO) {
    try {
      await articleService.updateByID(params!.articleID, article);
      toast.success(`Your changes to ${article.title} have been published`);
    } catch {
      toast.error(
        `Your changes to ${article.title} could not be saved at this time`
      );
    }
  }

  if (!article) {
    return <i className="fa fa-spin fa-spinner" />;
  }

  return <NewsArticleEditor defaultArticle={article} onSave={onSave} />;
}
