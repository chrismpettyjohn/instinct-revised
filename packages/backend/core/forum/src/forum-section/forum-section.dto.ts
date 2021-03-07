import {
  NewForumSectionDTO as NewForumSectionDTOI,
  UpdateForumSectionDTO as UpdateForumSectionDTOI,
} from '@instinct-prj/interface';
import {IsNotEmpty, IsOptional, IsString} from 'class-validator';

export class NewForumSectionDTO implements NewForumSectionDTOI {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsString()
  @IsNotEmpty()
  icon!: string;
}

export class UpdateForumSectionDTO implements UpdateForumSectionDTOI {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  title?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  icon!: string;
}
