import {IsNotEmpty, IsString} from 'class-validator';
import {ArticleCategoryDTO as ArticleCategoryDTOI} from '@instinct-prj/interface';

export class ArticleCategoryDTO implements ArticleCategoryDTOI {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  color!: string;
}
