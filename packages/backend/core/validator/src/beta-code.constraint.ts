import {Injectable} from '@nestjs/common';
import {
  BetaCodeEntity,
  BetaCodeRepository,
  ConfigRepository,
} from '@instinct-prj/database-api';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({async: true})
@Injectable()
export class BetaCodeConstraint implements ValidatorConstraintInterface {
  constructor(
    private readonly configRepo: ConfigRepository,
    private readonly betaCodeRepo: BetaCodeRepository
  ) {}

  async validate(betaCode: string): Promise<boolean> {
    const config = await this.configRepo.getConfig();

    if (!config.siteBeta) {
      return true;
    }

    const code: BetaCodeEntity | undefined = await this.betaCodeRepo.findOne({
      betaCode,
    });

    return !!code && code.userID === null;
  }

  defaultMessage() {
    return 'Beta code is invalid';
  }
}

export function ValidBetaCode(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: BetaCodeConstraint,
    });
  };
}
