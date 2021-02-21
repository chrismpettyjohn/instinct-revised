import {ConfigRepository} from '../database/config';
import {BetaCodeRepository} from '../database/beta-code';
import {RequestWithSession} from '../session/session.type';
import {PermissionStatus} from '../database/rank/rank.types';
import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common';

@Injectable()
export class BetaModeGuard implements CanActivate {
  constructor(
    private readonly configRepo: ConfigRepository,
    private readonly betaCodeRepo: BetaCodeRepository
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const config = await this.configRepo.getConfig();

    if (!config.siteBeta) {
      return true;
    }

    const request: RequestWithSession = context.switchToHttp().getRequest();

    if (
      request.user?.rank?.websiteShowAdminPanel === PermissionStatus.Enabled
    ) {
      return true;
    }

    const betaCode = request.user?.betaCode
      ? await this.betaCodeRepo.findOne({
          betaCode: request.user!.betaCode!.betaCode,
        })
      : undefined;

    return !!betaCode;
  }
}
