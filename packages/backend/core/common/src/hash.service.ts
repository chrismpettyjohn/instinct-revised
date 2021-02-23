import MD5 from 'md5';
import Bcrypt from 'bcryptjs';
import {Injectable} from '@nestjs/common';
import {passwordHash} from './environment';

@Injectable()
export class HashService {
  generate(raw: string): string {
    return passwordHash === 'md5' ? MD5(raw) : Bcrypt.hashSync(raw);
  }

  compare(raw: string, hashed: string): boolean {
    return passwordHash === 'md5'
      ? MD5(raw) === MD5(raw)
      : Bcrypt.compareSync(raw, hashed);
  }
}
