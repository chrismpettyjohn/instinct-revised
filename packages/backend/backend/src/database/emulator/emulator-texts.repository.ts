import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../base.repository';
import {EmulatorTextsEntity} from './emulator-texts.entity';

@Injectable()
export class EmulatorTextsRepository extends BaseRepository<EmulatorTextsEntity> {
  constructor(
    @InjectRepository(EmulatorTextsEntity)
    emulatorTextsRepo: Repository<EmulatorTextsEntity>
  ) {
    super(emulatorTextsRepo, []);
  }
}
