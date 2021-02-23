import {UserBan, UserBanDTO} from '@instinct-prj/interface';
import {GetSession, HasScope} from '@instinct-prj/core-api';
import {userBanDataTransferObjectToEntity, UserBanDTOClass} from './ban.dto';
import {
  UserBanRepository,
  UserEntity,
  UserRepository,
  userBanWire,
} from '@instinct-prj/database-api';
import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Patch,
  Param,
} from '@nestjs/common';

@Controller('user/bans')
export class UserBanController {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly userBanRepo: UserBanRepository
  ) {}

  @Post()
  @HasScope('websiteManageBans')
  async createBan(
    @Body() ban: UserBanDTOClass,
    @GetSession() session: UserEntity
  ): Promise<UserBan> {
    const user = await this.userRepo.findOneOrFail({id: ban.userID});
    const newBan = await this.userBanRepo.create({
      userID: user.id!,
      ipAddress: user.ipCurrent,
      machineID: user.machineID ?? '',
      staffID: session.id!,
      banReason: ban.reason,
      banStartedTimestamp: ban.banStart,
      banExpirationTimestamp: ban.banEnd,
    });
    return userBanWire(newBan);
  }

  @Get()
  @HasScope('websiteManageBans')
  async getAllBans(): Promise<UserBan[]> {
    const bans = await this.userBanRepo.find();
    return bans.map(_ => userBanWire(_));
  }

  @Get(':banID')
  @HasScope('websiteManageBans')
  async getBanByID(@Param('banID') banID: number): Promise<UserBan> {
    const ban = await this.userBanRepo.findOneOrFail({id: banID});
    return userBanWire(ban);
  }

  @Patch(':banID')
  @HasScope('websiteManageBans')
  async updateBanByID(
    @Param('banID') banID: number,
    @Body() banDTO: UserBanDTO
  ): Promise<string> {
    await this.userBanRepo.update(
      {id: banID},
      userBanDataTransferObjectToEntity(banDTO)
    );
    return 'Your changes have been saved';
  }

  @Delete(':banID')
  @HasScope('websiteManageBans')
  async deleteBanByID(@Param('banID') banID: number): Promise<string> {
    await this.userBanRepo.delete({id: banID});
    return 'Ban has been deleted';
  }
}
