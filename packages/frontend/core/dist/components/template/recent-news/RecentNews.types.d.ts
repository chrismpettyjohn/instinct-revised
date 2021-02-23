import { Article } from '@instinct-prj/interface';
export interface RecentNewsState {
    articles: Article[];
    isLoading: boolean;
}
export declare const defaultRecentNewsState: RecentNewsState;
