import { GoogleRecaptchaService } from './recaptcha.service';
import { ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class RecaptchaConstraint implements ValidatorConstraintInterface {
    private readonly recaptchaService;
    constructor(recaptchaService: GoogleRecaptchaService);
    validate(token: string): Promise<boolean>;
    defaultMessage(): string;
}
export declare function ValidRecaptcha(validationOptions?: ValidationOptions): (object: object, propertyName: string) => void;
