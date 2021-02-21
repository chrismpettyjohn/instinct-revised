import {UserExists} from '../user/constraint/user-exists';
import {UniqueEmail} from '../user/constraint/unique-email';
import {IsEmail, IsNotEmpty, IsString} from 'class-validator';

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
