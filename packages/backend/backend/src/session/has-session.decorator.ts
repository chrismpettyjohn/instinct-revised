import {UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {AccountBannedGuard} from './account-ban.guard';
import {BetaModeGuard} from '../beta-code/beta-code.guard';

export function HasSession() {
  return UseGuards(
    AuthGuard('bearer-token'),
    AccountBannedGuard,
    BetaModeGuard
  );
}
