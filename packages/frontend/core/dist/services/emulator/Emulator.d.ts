import { EmulatorService } from './Emulator.types';
import { EmulatorSettings, EmulatorSettingsDTO, EmulatorTexts, EmulatorTextsDTO } from '@instinct-prj/interface';
export declare class EmulatorServiceImplementation implements EmulatorService {
    getSettings(): Promise<EmulatorSettings>;
    updateSettings(changes: EmulatorSettingsDTO): Promise<EmulatorSettings>;
    getTexts(): Promise<EmulatorTexts>;
    updateTexts(changes: EmulatorTextsDTO): Promise<EmulatorTexts>;
}
