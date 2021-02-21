import {jwtSecret} from '../common';
import {Injectable} from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport';
import {ExtractJwt, Strategy} from 'passport-jwt';
import {UserEntity, UserRepository} from '../database/user';

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
