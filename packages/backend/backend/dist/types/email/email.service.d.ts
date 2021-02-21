import { ConfigRepository } from '../database/config';
export declare class EmailService {
    private readonly configRepo;
    constructor(configRepo: ConfigRepository);
    sendEmail<T>(recipient: string, templateID: string, payload: T): Promise<void>;
}
