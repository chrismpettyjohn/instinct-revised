import {RankPipe} from './rank.pipe';
import {RankDTOClass} from './rank.dto';
import {Rank} from '@instinct-prj/interface';
import {RankRepository} from '../database/rank';
import {RankEntity, rankWire} from '../database/rank';
import {HasScope} from '../session/permission-scope.decorator';
import {rankDataTransferObjectToEntity} from '../database/rank';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('ranks')
export class RankController {
  constructor(private readonly rankRepo: RankRepository) {}

  @Post()
  @HasScope('websiteManageRanks')
  async createRank(@Body() rankDTO: RankDTOClass): Promise<Rank> {
    const newRank = await this.rankRepo.create(
      rankDataTransferObjectToEntity(rankDTO)
    );
    return rankWire(newRank);
  }

  @Get()
  async getMany(): Promise<Rank[]> {
    const ranks: RankEntity[] = await this.rankRepo.getAll();
    return ranks.map(rank => rankWire(rank));
  }

  @Get('staff')
  async getStaff(): Promise<Rank[]> {
    const ranks: RankEntity[] = await this.rankRepo.getStaff();
    return ranks.map(rank => rankWire(rank));
  }

  @Get(':rankID')
  getByID(@Param('rankID', RankPipe) rank: RankEntity): Rank {
    return rankWire(rank);
  }

  @Patch(':rankID')
  @HasScope('websiteManageRanks')
  async updateByID(
    @Param('rankID', RankPipe) rank: RankEntity,
    @Body() rankDTO: RankDTOClass
  ): Promise<string> {
    // TODO: Implement syncing users in a rank DTO
    await this.rankRepo.update(
      {id: rank.id!},
      rankDataTransferObjectToEntity(rankDTO)
    );
    return 'Your changes have been saved';
  }

  @Delete(':rankID')
  @HasScope('websiteManageRanks')
  async deleteByID(
    @Param('rankID', RankPipe) rank: RankEntity
  ): Promise<string> {
    await this.rankRepo.delete({id: rank.id!});
    return 'Rank has been deleted';
  }
}
