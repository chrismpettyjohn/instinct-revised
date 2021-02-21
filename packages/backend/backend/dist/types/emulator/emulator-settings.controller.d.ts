import { EmulatorSettingsDTO } from '@instinct-prj/interface';
import { EmulatorSettingsRepository } from '../database/emulator/emulator-settings.repository';
export declare class EmulatorSettingsController {
    private readonly emulatorSettingsRepo;
    constructor(emulatorSettingsRepo: EmulatorSettingsRepository);
    getSettings(): Promise<import("@instinct-prj/interface").EmulatorSettings>;
    updateSettings(emulatorSettingsDTO: EmulatorSettingsDTO): Promise<import("@instinct-prj/interface").EmulatorSettings>;
}
