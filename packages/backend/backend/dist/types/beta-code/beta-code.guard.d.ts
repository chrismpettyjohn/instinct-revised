import { ConfigRepository } from '../database/config';
import { BetaCodeRepository } from '../database/beta-code';
import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class BetaModeGuard implements CanActivate {
    private readonly configRepo;
    private readonly betaCodeRepo;
    constructor(configRepo: ConfigRepository, betaCodeRepo: BetaCodeRepository);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
