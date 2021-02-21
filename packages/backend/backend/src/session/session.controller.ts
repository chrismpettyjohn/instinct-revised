import {HashService} from '../common';
import {User} from '@instinct-prj/interface';
import {SessionService} from './session.service';
import {HasSession} from './has-session.decorator';
import {GetSession} from './get-session.decorator';
import {UserEntity, UserRepository, userWire} from '../database/user';
import {BadRequestException, Body, Controller, Get, Post} from '@nestjs/common';
import {
  NewSessionDTO,
  UpdateEmailDTO,
  UpdatePasswordDTO,
  UpdatePreferencesDTO,
} from './session.dto';

@Controller('session')
export class SessionController {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly sessionService: SessionService,
    private readonly hashService: HashService
  ) {}

  @Post()
  createSession(@Body() newSession: NewSessionDTO): Promise<string> {
    return this.sessionService.loginWithCredentials(
      newSession.username,
      newSession.password
    );
  }

  @Post('sso')
  @HasSession()
  async createSSO(@GetSession() session: UserEntity): Promise<string> {
    return this.userRepo.createSSO(session.id!);
  }

  @Post('settings/preferences')
  @HasSession()
  async changePreferences(
    @GetSession() session: UserEntity,
    @Body() preferencesDTO: UpdatePreferencesDTO
  ): Promise<string> {
    await this.userRepo.update(
      {id: session.id!},
      {
        favoriteYoutubeVideo: preferencesDTO.favoriteYoutubeVideo,
      }
    );
    return 'Your preferences have been updated';
  }

  @Post('settings/email')
  @HasSession()
  async changeEmail(
    @GetSession() session: UserEntity,
    @Body() emailDTO: UpdateEmailDTO
  ): Promise<string> {
    const samePassword: boolean = await this.hashService.compare(
      emailDTO.password,
      session.password
    );

    if (!samePassword) {
      throw new BadRequestException('That is not the right password');
    }

    await this.userRepo.update({id: session.id!}, {email: emailDTO.email});

    return 'Your email has been updated';
  }

  @Post('settings/password')
  @HasSession()
  async changePassword(
    @GetSession() session: UserEntity,
    @Body() passwordDTO: UpdatePasswordDTO
  ): Promise<string> {
    const samePassword: boolean = await this.hashService.compare(
      passwordDTO.oldPassword,
      session.password
    );

    if (!samePassword) {
      throw new BadRequestException('That is not the right password');
    }

    if (passwordDTO.newPassword !== passwordDTO.newPasswordAgain) {
      throw new BadRequestException('Your passwords must match');
    }

    await this.userRepo.update(
      {id: session.id!},
      {
        password: this.hashService.generate(passwordDTO.newPassword),
      }
    );

    return 'Your password has been updated';
  }

  @Get()
  @HasSession()
  getSession(@GetSession() session: UserEntity): User {
    return userWire(session);
  }
}
