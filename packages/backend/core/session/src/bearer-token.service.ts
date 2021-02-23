import JWT from 'jsonwebtoken';
import {Injectable} from '@nestjs/common';
import {jwtExpires, jwtSecret} from '@instinct-prj/core-api';

@Injectable()
export class BearerTokenService {
  signToken(userID: number): string {
    return JWT.sign({userID}, jwtSecret, {
      expiresIn: jwtExpires,
    });
  }
}
