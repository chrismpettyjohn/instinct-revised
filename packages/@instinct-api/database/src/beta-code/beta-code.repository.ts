import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {BetaCodeEntity} from './beta-code.entity';
import {BaseRepository} from '../base.repository';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class BetaCodeRepository extends BaseRepository<BetaCodeEntity> {
  constructor(
    @InjectRepository(BetaCodeEntity) betaCodeEntity: Repository<BetaCodeEntity>
  ) {
    super(betaCodeEntity, ['user']);
  }
}
