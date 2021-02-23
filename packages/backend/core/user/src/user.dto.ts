import {UserDTO} from '@instinct-prj/interface';
import {UniqueEmail} from './constraint/unique-email';
import {ValidRecaptcha} from '@instinct-prj/core-api';
import {UniqueUsername} from './constraint/unique-username';
import {IsEmail, IsNotEmpty, IsString} from 'class-validator';
import {ValidBetaCode} from '@instinct-prj/beta-code-api';

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
}
