import {
  NewForumPostDTO as NewForumPostDTOI,
  UpdateForumPostDTO as UpdateForumPostDTOI,
} from '@instinct-prj/interface';
import {IsNotEmpty, IsOptional, IsString} from 'class-validator';

export class NewForumPostDTO implements NewForumPostDTOI {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  content!: string;
}

export class UpdateForumPostDTO implements UpdateForumPostDTOI {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  title?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  content?: string;
}
