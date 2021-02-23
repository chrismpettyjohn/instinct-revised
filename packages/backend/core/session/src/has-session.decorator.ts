import {UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {AccountBannedGuard} from './account-ban.guard';
import {BetaModeGuard} from '@instinct-prj/beta-code-api';

export function HasSession() {
  return UseGuards(
    AuthGuard('bearer-token'),
    AccountBannedGuard,
    BetaModeGuard
  );
}
