export type OrderBy<Entity> = {[P in keyof Entity]?: 'DESC' | 'ASC'};

export enum OrderByOptions {
  Ascending = 'ASC',
  Descending = 'DESC',
}
