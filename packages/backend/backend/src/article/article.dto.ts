import {ArticleDTO} from '@instinct-prj/interface';
import {IsNotEmpty, IsNumber, IsOptional, IsString} from 'class-validator';

export class CreateArticleDTO implements ArticleDTO {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsNumber()
  categoryID!: number;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsString()
  @IsNotEmpty()
  content!: string;

  @IsString()
  @IsNotEmpty()
  headerImage!: string;

  @IsString()
  @IsNotEmpty()
  thumbnailImage!: string;
}

export class UpdateArticleDTO implements Partial<ArticleDTO> {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  title?: string;

  @IsNumber()
  @IsOptional()
  categoryID?: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  content?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  headerImage?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  thumbnailImage?: string;
}
