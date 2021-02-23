import {Injectable} from '@nestjs/common';
import {jwtSecret} from '@instinct-prj/core-api';
import {PassportStrategy} from '@nestjs/passport';
import {ExtractJwt, Strategy} from 'passport-jwt';
import {UserEntity, UserRepository} from '@instinct-prj/database-api';

@Injectable()
export class BearerTokenStrategy extends PassportStrategy(
  Strategy,
  'bearer-token'
) {
  constructor(private readonly userRepo: UserRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtSecret,
    });
  }

  async validate({userID}: Record<'userID', number>): Promise<UserEntity> {
    return this.userRepo.findOneOrFail({id: userID});
  }
}
