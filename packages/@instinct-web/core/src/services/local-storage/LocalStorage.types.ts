export interface LocalStorageTypes {
  get(index: string): string;
  set(index: string, value: string): void;
  delete(index: string): void;
}
