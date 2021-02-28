import {ValidRecaptcha} from '@instinct-api/google';
import {ClientType, UserDTO} from '@instinct-prj/interface';
import {IsEmail, IsNotEmpty, IsString} from 'class-validator';
import {
  UniqueUsername,
  UniqueEmail,
  ValidBetaCode,
} from '@instinct-api/validator';

export class UserDTOClass implements UserDTO {
  @IsString()
  @UniqueUsername()
  @IsNotEmpty()
  username!: string;

  @IsEmail()
  @UniqueEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  password!: string;

  @ValidRecaptcha()
  recaptcha!: string;

  @ValidBetaCode()
  betaCode?: string;

  @IsString()
  @IsNotEmpty()
  clientType!: ClientType;
}
