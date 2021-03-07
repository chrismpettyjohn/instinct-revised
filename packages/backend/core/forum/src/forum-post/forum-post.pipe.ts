import {ForumPostRepository, ForumPostEntity} from '@instinct-api/database';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class ForumPostPipe implements PipeTransform {
  constructor(private readonly forumPipeRepo: ForumPostRepository) {}

  async transform(forumPostID: number): Promise<ForumPostEntity> {
    const post = await this.forumPipeRepo.findOne({id: forumPostID});

    if (!post) {
      throw new NotFoundException('Forum post does not exist');
    }

    return post;
  }
}
