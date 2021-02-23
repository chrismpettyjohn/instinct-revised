import {HashService} from '@instinct-api/common';
import {BearerTokenService} from './bearer-token.service';
import {BadRequestException, Injectable} from '@nestjs/common';
import {UserEntity, UserRepository} from '@instinct-api/database';

@Injectable()
export class SessionService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly hashService: HashService,
    private readonly bearerTokenService: BearerTokenService
  ) {}

  async loginWithCredentials(
    username: string,
    password: string
  ): Promise<string> {
    const user: UserEntity | undefined = await this.userRepo.findOne({
      username,
    });

    if (!user) {
      throw new BadRequestException('invalid_username');
    }

    const samePassword: boolean = await this.hashService.compare(
      password,
      user.password
    );

    if (!samePassword) {
      throw new BadRequestException('invalid_password');
    }

    return this.bearerTokenService.signToken(user.id!);
  }
}
