import {Injectable} from '@nestjs/common';
import {UserRepository} from '@instinct-api/database';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({async: true})
@Injectable()
export class UniqueUsernameConstraint implements ValidatorConstraintInterface {
  constructor(private readonly userRepo: UserRepository) {}

  async validate(username: string): Promise<boolean> {
    const user = await this.userRepo.findOne({username});
    return !user;
  }

  defaultMessage() {
    return 'Username is taken';
  }
}

export function UniqueUsername(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: UniqueUsernameConstraint,
    });
  };
}
