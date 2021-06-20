import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../base.repository';
import {EmulatorSettingsEntity} from './emulator-settings.entity';

@Injectable()
export class EmulatorSettingsRepository extends BaseRepository<EmulatorSettingsEntity> {
  constructor(
    @InjectRepository(EmulatorSettingsEntity)
    emulatorSettingsRepo: Repository<EmulatorSettingsEntity>
  ) {
    super(emulatorSettingsRepo, []);
  }
}
