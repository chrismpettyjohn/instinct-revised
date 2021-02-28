import Moment from 'moment';
import {UserPipe} from './user.pipe';
import {UserDTOClass} from './user.dto';
import {Room, User, UserProfile} from '@instinct-prj/interface';
import {
  badgeWire,
  groupWire,
  roomWire,
  UserEntity,
  UserRepository,
  userWire,
  ConfigRepository,
  BetaCodeRepository,
} from '@instinct-api/database';
import {
  maxAccountsPerIP,
  defaultUserCredits,
  defaultUserHomeRoom,
  defaultUserLook,
  defaultUserMotto,
  defaultUserPixels,
  defaultUserPoints,
  defaultUserRank,
} from '@instinct-api/common';
import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Ip,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(
    private readonly configRepo: ConfigRepository,
    private readonly userRepo: UserRepository,
    private readonly betaCodeRepo: BetaCodeRepository
  ) {}

  @Get('online')
  async getOnlineUsers(): Promise<User[]> {
    const onlineUsers = await this.userRepo.find({online: '1'});
    return onlineUsers.map(_ => userWire(_));
  }

  @Get('user-of-the-week')
  async getUserOfTheWeek(): Promise<User[]> {
    const usersOfTheWeek = await this.userRepo.find({userOfTheWeek: 1});
    return usersOfTheWeek.map(_ => userWire(_));
  }

  @Post()
  async createUser(
    @Body() newUser: UserDTOClass,
    @Ip() ipAddress: string
  ): Promise<User> {
    const alreadyRegistered = await this.userRepo.find({ipCurrent: ipAddress});

    if (alreadyRegistered.length >= maxAccountsPerIP) {
      throw new ForbiddenException('Too many accounts');
    }

    const currentTimestamp: number = Moment().unix();
    const user: UserEntity = await this.userRepo.create({
      username: newUser.username,
      motto: defaultUserMotto,
      password: newUser.password,
      rankID: defaultUserRank,
      email: newUser.email.toLowerCase(),
      mailVerified: 0,
      accountCreated: currentTimestamp,
      accountDayOfBirth: 0,
      lastLogin: currentTimestamp,
      lastOnline: currentTimestamp,
      gender: 'M',
      figure: defaultUserLook,
      credits: defaultUserCredits,
      pixels: defaultUserPixels,
      points: defaultUserPoints,
      online: '0',
      ipRegister: ipAddress,
      ipCurrent: ipAddress,
      homeRoom: defaultUserHomeRoom,
      favoriteYoutubeVideo: 'GfxcnX7XWfg',
      userOfTheWeek: 0,
      clientType: 'nitro',
    });

    const config = await this.configRepo.getConfig();

    if (config.siteBeta) {
      await this.betaCodeRepo.update(
        {betaCode: newUser.betaCode},
        {userID: user.id!}
      );
    }

    return userWire(user);
  }

  @Get(':userID')
  getUserByID(@Param('userID', UserPipe) user: UserEntity): User {
    return userWire(user);
  }

  @Get(':userID/rooms')
  async getRoomsByUserID(
    @Param('userID', UserPipe) user: UserEntity
  ): Promise<Room[]> {
    return user.rooms!.map(room => roomWire(room));
  }

  @Get('profile/:username')
  async getUserByUsername(
    @Param('username') username: string
  ): Promise<UserProfile> {
    const user: UserEntity | undefined = await this.userRepo.findOne({
      username,
    });

    if (!user) {
      throw new NotFoundException('User does not exist');
    }

    return {
      user: userWire(user),
      rooms: user.rooms!.map(room => roomWire(room)),
      badges: user.badges!.map(badge => badgeWire(badge)),
      friends: user.friends!.map(user => userWire(user)),
      groups: user.joinedGroups!.map(group => groupWire(group)),
    };
  }
}
