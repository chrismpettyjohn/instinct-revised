import {Injectable} from '@nestjs/common';
import {GoogleRecaptchaService} from './recaptcha.service';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({async: true})
@Injectable()
export class RecaptchaConstraint implements ValidatorConstraintInterface {
  constructor(private readonly recaptchaService: GoogleRecaptchaService) {}

  validate(token: string) {
    return this.recaptchaService.passedVerification(token);
  }

  defaultMessage() {
    return 'Invalid recaptcha code';
  }
}

export function ValidRecaptcha(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: RecaptchaConstraint,
    });
  };
}
