import {userWire} from '../user/user/user.wire';
import {BetaCodeEntity} from './beta-code.entity';
import {BetaCode} from '@instinct-prj/interface';

export function betaCodeWire(entity: BetaCodeEntity): BetaCode {
  return {
    code: entity.betaCode,
    user: entity.user ? userWire(entity.user) : undefined,
  };
}
