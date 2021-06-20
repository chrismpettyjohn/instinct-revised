export interface EmulatorTextsRow {
  id: string;
  label: string;
  value: string;
}

export type EmulatorTexts = EmulatorTextsRow[];

export type EmulatorTextsDTO = Array<Omit<EmulatorTextsRow, 'label'>>;
