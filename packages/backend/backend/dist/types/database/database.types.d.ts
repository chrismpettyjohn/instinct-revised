export declare type OrderBy<Entity> = {
    [P in keyof Entity]?: 'DESC' | 'ASC';
};
export declare enum OrderByOptions {
    Ascending = "ASC",
    Descending = "DESC"
}
