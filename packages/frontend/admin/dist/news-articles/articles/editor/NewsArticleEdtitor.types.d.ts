import { Article, ArticleDTO } from '@instinct-prj/interface';
export interface NewsArticleEditorProps {
    defaultArticle?: Article;
    onSave: (article: ArticleDTO) => Promise<void>;
}
export interface NewsArticleEditorState {
    article: Article;
    showSpinner: boolean;
    showError: boolean;
}
export declare const defaultNewsArticleEditorState: NewsArticleEditorState;
