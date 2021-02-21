import Moment from 'moment';
import {UserPipe} from '../../user/user.pipe';
import {UserGuestbookPipe} from './user-guestbook.pipe';
import {UserGuestbookPost} from '@instinct-prj/interface';
import {UserGuestbookPostDTO} from './user-guestbook.dto';
import {GetSession} from '../../session/get-session.decorator';
import {HasSession} from '../../session/has-session.decorator';
import {UserEntity} from '../../database/user/user/user.entity';
import {PermissionStatus} from '../../database/rank/rank.types';
import {userGuestbookWire} from '../../database/user/guestbook/guestbook.wire';
import {UserGuestbookEntity} from '../../database/user/guestbook/guestbook.entity';
import {UserGuestbookRepository} from '../../database/user/guestbook/guestbook.repository';
import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('users/:userID/guestbook')
export class UserGuestbookController {
  constructor(private readonly guestbookRepo: UserGuestbookRepository) {}

  @Post()
  @HasSession()
  async createPost(
    @Param('userID', UserPipe) user: UserEntity,
    @GetSession() session: UserEntity,
    @Body() guestbookDTO: UserGuestbookPostDTO
  ): Promise<UserGuestbookPost> {
    const newPost = await this.guestbookRepo.create({
      id: undefined,
      authorID: session.id!,
      profileID: user.id!,
      content: guestbookDTO.content,
      timestamp: Moment().unix(),
    });

    return userGuestbookWire(newPost);
  }

  @Get()
  async getPosts(
    @Param('userID', UserPipe) user: UserEntity
  ): Promise<UserGuestbookPost[]> {
    const posts = await this.guestbookRepo.find({profileID: user.id!});
    return posts.map(_ => userGuestbookWire(_));
  }

  @Patch(':guestbookID')
  @HasSession()
  async updatePost(
    @Param('guestbookID', UserGuestbookPipe) post: UserGuestbookEntity,
    @GetSession() user: UserEntity,
    @Body() guestbookDTO: UserGuestbookPostDTO
  ): Promise<string> {
    if (
      post.authorID !== user.id! &&
      user.rank!.websiteManageGuestbook !== PermissionStatus.Enabled
    ) {
      throw new ForbiddenException();
    }
    await this.guestbookRepo.update({id: post.id!}, guestbookDTO);
    return 'Post has been updated';
  }

  @Delete(':guestbookID')
  @HasSession()
  async deletePost(
    @Param('guestbookID', UserGuestbookPipe) post: UserGuestbookEntity,
    @GetSession() user: UserEntity
  ): Promise<string> {
    console.log(post.authorID, user.id!);
    if (
      post.authorID !== user.id! &&
      user.rank!.websiteManageGuestbook !== PermissionStatus.Enabled
    ) {
      throw new ForbiddenException();
    }
    await this.guestbookRepo.delete({id: post.id!});
    return 'Post has been deleted';
  }
}
