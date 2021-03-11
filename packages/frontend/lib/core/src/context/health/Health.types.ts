import {exampleHealth, Health} from '@instinct-prj/interface';

export interface HealthContext {
  health: Health;
  setHealth(changes: Partial<Health>): void;
}

export const defaultHealthInterface: HealthContext = {
  health: exampleHealth,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setHealth(changes: Partial<Health>) {},
};
