import { Repository } from 'typeorm';
import { BaseRepository } from '../base.repository';
import { EmulatorTextsEntity } from './emulator-texts.entity';
export declare class EmulatorTextsRepository extends BaseRepository<EmulatorTextsEntity> {
    constructor(emulatorTextsRepo: Repository<EmulatorTextsEntity>);
}
