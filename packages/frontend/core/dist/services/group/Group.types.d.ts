import { Group } from '@instinct-prj/interface';
export interface GroupService {
    getAll(): Promise<Group[]>;
    getMostPopular(): Promise<Group[]>;
    getByID(groupID: string): Promise<Group>;
}
