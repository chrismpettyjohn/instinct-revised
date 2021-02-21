import { BetaCodeService } from './BetaCode.types';
import { BetaCode } from '@instinct-prj/interface';
export declare class BetaCodeServiceImplementation implements BetaCodeService {
    create(): Promise<BetaCode>;
    getAll(): Promise<BetaCode[]>;
    delete(code: string): Promise<void>;
}
