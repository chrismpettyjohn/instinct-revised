import JWT from 'jsonwebtoken';
import {Injectable} from '@nestjs/common';
import {jwtExpires, jwtSecret} from '../common';

@Injectable()
export class BearerTokenService {
  signToken(userID: number): string {
    return JWT.sign({userID}, jwtSecret, {
      expiresIn: jwtExpires,
    });
  }
}
