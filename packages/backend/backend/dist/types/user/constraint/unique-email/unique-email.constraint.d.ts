import { UserRepository } from '../../../database/user';
import { ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class UniqueEmailConstraint implements ValidatorConstraintInterface {
    private readonly userRepo;
    constructor(userRepo: UserRepository);
    validate(email: string): Promise<boolean>;
    defaultMessage(): string;
}
export declare function UniqueEmail(validationOptions?: ValidationOptions): (object: object, propertyName: string) => void;
