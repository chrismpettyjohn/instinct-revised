import {Article} from '@instinct-prj/interface';

export interface RecentNewsState {
  articles: Article[];
  isLoading: boolean;
}

export const defaultRecentNewsState: RecentNewsState = {
  articles: [],
  isLoading: true,
};
