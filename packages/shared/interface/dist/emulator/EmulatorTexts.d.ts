export interface EmulatorTextsRow {
    id: string;
    label: string;
    value: string;
}
export declare type EmulatorTexts = EmulatorTextsRow[];
export declare type EmulatorTextsDTO = Array<Omit<EmulatorTextsRow, 'label'>>;
