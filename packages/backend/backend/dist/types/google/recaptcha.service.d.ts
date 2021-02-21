import { ConfigRepository } from '../database/config';
export declare class GoogleRecaptchaService {
    private readonly configRepo;
    constructor(configRepo: ConfigRepository);
    passedVerification(response: string): Promise<boolean>;
}
