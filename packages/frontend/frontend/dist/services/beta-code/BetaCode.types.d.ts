import { BetaCode } from '@instinct-prj/interface';
export interface BetaCodeService {
    create(): Promise<BetaCode>;
    getAll(): Promise<BetaCode[]>;
    delete(code: string): Promise<void>;
}
