import { UserRepository } from '../../../database/user';
import { ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class UniqueUsernameConstraint implements ValidatorConstraintInterface {
    private readonly userRepo;
    constructor(userRepo: UserRepository);
    validate(username: string): Promise<boolean>;
    defaultMessage(): string;
}
export declare function UniqueUsername(validationOptions?: ValidationOptions): (object: object, propertyName: string) => void;
