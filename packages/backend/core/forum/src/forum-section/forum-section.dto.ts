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
}
