// @ts-ignore - no types
import {v4 as uuid} from 'uuid';
import {BetaCode} from '@instinct-prj/interface';
import {HasScope} from '../session/permission-scope.decorator';
import {Controller, Get, Delete, Param, Post} from '@nestjs/common';
import {BetaCodeRepository, betaCodeWire} from '../database/beta-code';

@Controller('beta-codes')
export class BetaCodeController {
  constructor(private readonly betaCodeRepo: BetaCodeRepository) {}

  @Post()
  @HasScope('websiteManageBetaCodes')
  async createBetaCode(): Promise<BetaCode> {
    const newBetaCode = await this.betaCodeRepo.create({
      betaCode: `INSTINCT-${uuid()}`.toUpperCase().slice(0, 32),
    });
    return betaCodeWire(newBetaCode);
  }

  @Get()
  @HasScope('websiteManageBetaCodes')
  async getBetaCodes(): Promise<BetaCode[]> {
    const betaCodes = await this.betaCodeRepo.find();
    return betaCodes.map(_ => betaCodeWire(_));
  }

  @Delete(':betaCode')
  @HasScope('websiteManageBetaCodes')
  async deleteBetaCode(@Param('betaCode') betaCode: string) {
    await this.betaCodeRepo.delete({betaCode});
    return 'Beta code deleted';
  }
}
