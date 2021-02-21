import {Article, ArticleDTO, exampleArticle} from '@instinct-prj/interface';

export interface NewsArticleEditorProps {
  defaultArticle?: Article;
  onSave: (article: ArticleDTO) => Promise<void>;
}

export interface NewsArticleEditorState {
  article: Article;
  showSpinner: boolean;
  showError: boolean;
}

export const defaultNewsArticleEditorState: NewsArticleEditorState = {
  article: exampleArticle,
  showSpinner: false,
  showError: false,
};
