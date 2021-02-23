export interface ArticleDTO {
  title: string;
  description: string;
  content: string;
  headerImage: string;
  thumbnailImage: string;
  categoryID: number;
}

export const exampleArticleDTO: ArticleDTO = {
  title: '',
  description: '',
  content: '',
  headerImage: '',
  thumbnailImage: '',
  categoryID: 1,
};
