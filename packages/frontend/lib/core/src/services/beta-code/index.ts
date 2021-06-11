import {BetaCodeService} from './BetaCode.types';
import {BetaCodeServiceImplementation} from './BetaCode';

export const betaCodeService: BetaCodeService =
  new BetaCodeServiceImplementation();
