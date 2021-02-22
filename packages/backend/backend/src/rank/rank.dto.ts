import {RankDTO} from '@instinct-prj/interface';
import {IsBoolean, IsNotEmpty, IsNumber, IsString} from 'class-validator';

export class RankDTOClass implements RankDTO {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  badge!: string;

  @IsNumber()
  level!: number;

  @IsNumber({}, {each: true})
  users!: number[];

  @IsBoolean()
  websiteAdminClient!: boolean;

  @IsBoolean()
  websiteShowStaff!: boolean;

  @IsBoolean()
  websiteShowAdminPanel!: boolean;

  @IsBoolean()
  websiteManageNews!: boolean;

  @IsBoolean()
  websiteManageRanks!: boolean;

  @IsBoolean()
  websiteManageUsers!: boolean;

  @IsBoolean()
  websiteManageBans!: boolean;

  @IsBoolean()
  websiteManageConfig!: boolean;

  @IsBoolean()
  websiteManageBetaCodes!: boolean;

  @IsBoolean()
  websiteManageGuestbook!: boolean;

  @IsBoolean()
  websiteManageEmulator!: boolean;

  @IsBoolean()
  websiteManageComments!: boolean;
}
