import { Health } from '@instinct-prj/interface';
export interface HealthContext {
    health: Health;
    setHealth(changes: Partial<Health>): void;
}
export declare const defaultHealthInterface: HealthContext;
