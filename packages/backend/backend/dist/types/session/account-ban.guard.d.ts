import { Observable } from 'rxjs';
import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class AccountBannedGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
