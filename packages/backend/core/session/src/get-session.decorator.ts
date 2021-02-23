import {RequestWithSession} from './session.type';
import {UserEntity} from '@instinct-api/database';
import {createParamDecorator, ExecutionContext} from '@nestjs/common';

// tslint:disable-next-line:variable-name - In Typescript decorators start with a capital letter
export const GetSession = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): UserEntity => {
    const request: RequestWithSession = ctx.switchToHttp().getRequest();
    return request.user;
  }
);
