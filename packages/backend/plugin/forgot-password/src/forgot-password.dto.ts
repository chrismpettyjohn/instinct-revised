import {IsNotEmpty, IsString} from 'class-validator';

export class ForgotPasswordDTO {
  @IsString()
  @IsNotEmpty()
  token!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;

  @IsString()
  @IsNotEmpty()
  passwordAgain!: string;
}
