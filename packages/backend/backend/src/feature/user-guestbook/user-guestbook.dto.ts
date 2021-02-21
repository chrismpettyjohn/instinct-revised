import {IsString, IsNotEmpty} from 'class-validator';
import {UserGuestbookPostDTO as UserGuestbookPostDTOI} from '@instinct-prj/interface';

export class UserGuestbookPostDTO implements UserGuestbookPostDTOI {
  @IsString()
  @IsNotEmpty()
  content!: string;
}
