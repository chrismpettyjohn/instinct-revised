import Moment from 'moment';
import {UserPipe} from '@instinct-api/users';
import {UserGuestbookPipe} from './user-guestbook.pipe';
import {UserGuestbookPost} from '@instinct-prj/interface';
import {UserGuestbookPostDTO} from './user-guestbook.dto';
import {GetSession, HasSession} from '@instinct-api/session';
import {
  userGuestbookWire,
  UserGuestbookEntity,
  UserGuestbookRepository,
  PermissionStatus,
  UserEntity,
} from '@instinct-api/database';
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
