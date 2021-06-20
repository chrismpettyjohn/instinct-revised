import {RoomFilter} from '@instinct-prj/interface';
import {IsString, IsOptional} from 'class-validator';

export class RoomFilterDTO implements RoomFilter {
  @IsString()
  @IsOptional()
  owner?: string;
}
