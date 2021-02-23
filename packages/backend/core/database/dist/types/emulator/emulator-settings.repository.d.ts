import { Repository } from 'typeorm';
import { BaseRepository } from '../base.repository';
import { EmulatorSettingsEntity } from './emulator-settings.entity';
export declare class EmulatorSettingsRepository extends BaseRepository<EmulatorSettingsEntity> {
    constructor(emulatorSettingsRepo: Repository<EmulatorSettingsEntity>);
}
