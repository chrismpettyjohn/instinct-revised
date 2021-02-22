import { Health } from '@instinct-prj/interface';
import { RoomRepository } from '../database/room';
import { ConfigRepository } from '../database/config';
import { UserRepository } from '../database/user/user';
export declare class HealthController {
    private readonly userRepo;
    private readonly roomRepo;
    private readonly configRepo;
    constructor(userRepo: UserRepository, roomRepo: RoomRepository, configRepo: ConfigRepository);
    getHealth(): Promise<Health>;
}
