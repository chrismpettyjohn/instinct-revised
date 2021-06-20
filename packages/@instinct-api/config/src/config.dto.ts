import {ConfigDTO} from '@instinct-prj/interface';
import {
  IsBoolean,
  IsEmail,
  IsIP,
  IsNotEmpty,
  IsOptional,
  IsPort,
  IsString,
  IsUrl,
} from 'class-validator';

export class UpdateConfigDTO implements ConfigDTO {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  siteName!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  siteLink!: string;

  @IsBoolean()
  siteBeta!: boolean;

  @IsIP()
  @IsOptional()
  emulatorIP!: string;

  @IsPort()
  @IsOptional()
  emulatorPort!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  swfHabbo!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  swfExternalVariables!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  swfExternalTexts!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  swfProductData!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  swfFurniData!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  swfFigureData!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  swfBaseURL!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  swfBadgeURL!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  swfOverrideVariables!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  swfOverrideTexts!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  loadingMessage!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  groupBadgeURL!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  rankBadgeURL!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  sendGridAPIKey!: string;

  @IsEmail()
  @IsOptional()
  sendGridAPISender!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  sendGridForgotPasswordTemplate!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  googleRecaptchaClientKey!: string;

  @IsBoolean()
  @IsOptional()
  websocketEnabled!: boolean;

  @IsString()
  @IsOptional()
  websocketIP!: string;

  @IsString()
  @IsOptional()
  websocketPort!: string;

  @IsString()
  @IsOptional()
  nitroURL!: string;

  @IsString()
  @IsOptional()
  discordURL!: string;

  @IsString()
  @IsOptional()
  twitterURL!: string;

  @IsBoolean()
  @IsOptional()
  maintenanceEnabled!: boolean;

  @IsString()
  @IsOptional()
  stripePublicKey!: string;

  @IsString()
  @IsOptional()
  stripeSecretKey!: string;

  @IsUrl()
  @IsOptional()
  logoURL!: string;
}
