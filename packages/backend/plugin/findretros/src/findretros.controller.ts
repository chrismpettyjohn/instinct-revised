import {Controller, Get} from '@nestjs/common';
import {UserEntity} from '@instinct-api/database';
import {FindRetrosService} from './findretros.service';
import {GetSession, HasSession} from '@instinct-api/session';

@Controller('findretros')
@HasSession()
export class FindRetrosController {

  constructor(private readonly findRetrosService: FindRetrosService) {}

  @Get()
  async didUserVote(@GetSession() user: UserEntity): Promise<boolean> {
    return this.findRetrosService.didIPVote(user.ipCurrent);
  }

}
