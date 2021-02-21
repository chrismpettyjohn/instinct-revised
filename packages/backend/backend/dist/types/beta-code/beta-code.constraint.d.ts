import { ConfigRepository } from '../database/config';
import { BetaCodeRepository } from '../database/beta-code';
import { ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class BetaCodeConstraint implements ValidatorConstraintInterface {
    private readonly configRepo;
    private readonly betaCodeRepo;
    constructor(configRepo: ConfigRepository, betaCodeRepo: BetaCodeRepository);
    validate(betaCode: string): Promise<boolean>;
    defaultMessage(): string;
}
export declare function ValidBetaCode(validationOptions?: ValidationOptions): (object: object, propertyName: string) => void;
