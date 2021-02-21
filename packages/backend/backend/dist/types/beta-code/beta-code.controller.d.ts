import { BetaCode } from '@instinct-prj/interface';
import { BetaCodeRepository } from '../database/beta-code';
export declare class BetaCodeController {
    private readonly betaCodeRepo;
    constructor(betaCodeRepo: BetaCodeRepository);
    createBetaCode(): Promise<BetaCode>;
    getBetaCodes(): Promise<BetaCode[]>;
    deleteBetaCode(betaCode: string): Promise<string>;
}
