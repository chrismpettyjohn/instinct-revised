import { RankRepository } from '../database/rank/rank.repository';
import { ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class RankConstraint implements ValidatorConstraintInterface {
    private readonly rankRepo;
    constructor(rankRepo: RankRepository);
    validate(rankID: number): Promise<boolean>;
    defaultMessage(): string;
}
export declare function ExistingRank(validationOptions?: ValidationOptions): (object: object, propertyName: string) => void;
