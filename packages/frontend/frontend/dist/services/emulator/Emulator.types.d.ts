import { EmulatorSettings, EmulatorSettingsDTO, EmulatorTexts, EmulatorTextsDTO } from '@instinct-prj/interface';
export interface EmulatorService {
    getSettings(): Promise<EmulatorSettings>;
    updateSettings(changes: Partial<EmulatorSettingsDTO>): Promise<EmulatorSettings>;
    getTexts(): Promise<EmulatorTexts>;
    updateTexts(changes: Partial<EmulatorTextsDTO>): Promise<EmulatorTexts>;
}
