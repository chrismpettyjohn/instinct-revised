export interface EmulatorSettingsRow {
    id: string;
    label: string;
    value: string;
}
export declare type EmulatorSettings = EmulatorSettingsRow[];
export declare type EmulatorSettingsDTO = Array<Omit<EmulatorSettingsRow, 'label'>>;
