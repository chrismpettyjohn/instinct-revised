import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';
import {
  ForumSectionRepository,
  ForumSectionEntity,
} from '@instinct-api/database';

@Injectable()
export class ForumSectionPipe implements PipeTransform {
  constructor(private readonly forumSectionRepo: ForumSectionRepository) {}

  async transform(forumSectionID: number): Promise<ForumSectionEntity> {
    const section = await this.forumSectionRepo.findOne({id: forumSectionID});

    if (!section) {
      throw new NotFoundException('Forum section does not exist');
    }

    return section;
  }
}
