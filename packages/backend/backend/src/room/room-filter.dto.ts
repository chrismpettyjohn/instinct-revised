import {IsString, IsOptional} from 'class-validator';
import {RoomFilter} from '@instinct-prj/interface';

export class RoomFilterDTO implements RoomFilter {
  @IsString()
  @IsOptional()
  owner?: string;
}
