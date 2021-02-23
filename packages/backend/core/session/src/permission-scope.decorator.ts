import {Permissions} from '@instinct-prj/interface';
import {HasSession} from './has-session.decorator';
import {PermissionScopeGuard} from './permission-scope.guard';
import {applyDecorators, SetMetadata, UseGuards} from '@nestjs/common';

// tslint:disable-next-line:variable-name - In Typescript decorators start with a capital letter
export const RequireScope = (scope: keyof Permissions) =>
  SetMetadata('scope', scope);

export function HasScope(scope: keyof Permissions) {
  return applyDecorators(
    HasSession(),
    SetMetadata('scope', scope),
    UseGuards(PermissionScopeGuard)
  );
}
