import {UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {BetaModeGuard} from './beta-code.guard';
import {AccountBannedGuard} from './account-ban.guard';

export function HasSession() {
  return UseGuards(
    AuthGuard('bearer-token'),
    AccountBannedGuard,
    BetaModeGuard
  );
}
