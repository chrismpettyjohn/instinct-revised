import { HashService } from '../common';
import { BearerTokenService } from './bearer-token.service';
import { UserRepository } from '../database/user';
export declare class SessionService {
    private readonly userRepo;
    private readonly hashService;
    private readonly bearerTokenService;
    constructor(userRepo: UserRepository, hashService: HashService, bearerTokenService: BearerTokenService);
    loginWithCredentials(username: string, password: string): Promise<string>;
}
