import { Rank, RankDTO } from '@instinct-prj/interface';
export interface RankTypes {
    create(rank: RankDTO): Promise<Rank>;
    getAll(): Promise<Rank[]>;
    getStaff(): Promise<Rank[]>;
    getByID(rankID: string): Promise<Rank>;
    updateByID(rankID: string, changes: RankDTO): Promise<void>;
    deleteByID(rankID: string): Promise<void>;
}
