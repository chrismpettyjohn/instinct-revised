import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class PermissionScopeGuard implements CanActivate {
    private readonly reflector;
    constructor(reflector: Reflector);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
