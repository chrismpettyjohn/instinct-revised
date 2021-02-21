import {ExistingRank} from '../../rank/rank.constraint';
import {IsString, IsNotEmpty, IsNumber} from 'class-validator';
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
