import { EmulatorTextsDTO } from '@instinct-prj/interface';
import { EmulatorTextsRepository } from '../database/emulator/emulator-texts.repository';
export declare class EmulatorTextsController {
    private readonly emulatorTextsRepo;
    constructor(emulatorTextsRepo: EmulatorTextsRepository);
    getTexts(): Promise<import("@instinct-prj/interface").EmulatorTexts>;
    updateSettings(emulatorTextsDTO: EmulatorTextsDTO): Promise<import("@instinct-prj/interface").EmulatorTexts>;
}
