import {IsEmail, IsNotEmpty, IsString} from 'class-validator';
import {UserExists, UniqueEmail} from '@instinct-prj/user-api';

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
