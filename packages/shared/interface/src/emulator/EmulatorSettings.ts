export interface EmulatorSettingsRow {
  id: string;
  label: string;
  value: string;
}

export type EmulatorSettings = EmulatorSettingsRow[];

export type EmulatorSettingsDTO = Array<Omit<EmulatorSettingsRow, 'label'>>;
