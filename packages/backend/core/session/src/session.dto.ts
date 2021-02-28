import {IsEmail, IsNotEmpty, IsOptional, IsString} from 'class-validator';
import {UserExists, UniqueEmail} from '@instinct-api/validator';
import {ClientType} from '@instinct-prj/interface';

export class NewSessionDTO {
  @IsString()
  @UserExists()
  @IsNotEmpty()
  username!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;
}

export class UpdatePreferencesDTO {
  @IsString()
  @IsNotEmpty()
  favoriteYoutubeVideo!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  clientType!: ClientType;
}

export class UpdatePasswordDTO {
  @IsString()
  @IsNotEmpty()
  oldPassword!: string;

  @IsString()
  @IsNotEmpty()
  newPassword!: string;

  @IsString()
  @IsNotEmpty()
  newPasswordAgain!: string;
}

export class UpdateEmailDTO {
  @IsEmail()
  @UniqueEmail()
  email!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;
}
