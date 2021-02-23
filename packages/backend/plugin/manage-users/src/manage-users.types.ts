import {ExistingRank} from '../../rank/rank.constraint';
import {IsString, IsNotEmpty, IsNumber, IsOptional} from 'class-validator';
import {InternalUserDTO as InternalUserDTOI} from '@instinct-prj/interface';

export class InternalUserDTO implements InternalUserDTOI {
  @IsString()
  @IsNotEmpty()
  username!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;

  @IsString()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @IsNotEmpty()
  motto!: string;

  @IsNumber()
  credits!: number;

  @IsNumber()
  pixels!: number;

  @IsNumber()
  points!: number;

  @IsString()
  @IsNotEmpty()
  figure!: string;

  @IsNumber()
  userOfTheWeek!: number;

  @IsNumber()
  @ExistingRank()
  rankID!: number;

  @IsString()
  @IsNotEmpty()
  favoriteYoutubeVideo!: string;

  @IsNumber()
  homeRoom!: number;
}

export class UpdateInternalUserDTO implements Partial<InternalUserDTOI> {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  username?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  password?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  email?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  motto?: string;

  @IsNumber()
  @IsOptional()
  credits?: number;

  @IsNumber()
  @IsOptional()
  pixels?: number;

  @IsNumber()
  @IsOptional()
  points?: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  figure?: string;

  @IsNumber()
  @IsOptional()
  userOfTheWeek?: number;

  @IsNumber()
  @ExistingRank()
  @IsOptional()
  rankID?: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  favoriteYoutubeVideo?: string;

  @IsNumber()
  @IsOptional()
  homeRoom?: number;
}
