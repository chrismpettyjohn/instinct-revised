import Moment from 'moment';
import {ForumPostPipe} from './forum-post.pipe';
import {ForumPost} from '@instinct-prj/interface';
import {GetSession, HasSession} from '@instinct-api/session';
import {NewForumPostDTO, UpdateForumPostDTO} from './forum-post.dto';
import {ForumSectionPipe} from '../forum-section/forum-section.pipe';
import {
  Controller,
  Get,
  Delete,
  Patch,
  Post,
  Param,
  ForbiddenException,
  Body,
} from '@nestjs/common';
import {
  ForumPostEntity,
  ForumPostRepository,
  forumPostWire,
  ForumSectionEntity,
  UserEntity,
} from '@instinct-api/database';

@Controller('forum/sections/:sectionID/posts')
@HasSession()
export class ForumPostController {
  constructor(private readonly forumPostRepo: ForumPostRepository) {}

  @Get()
  async getPostsForSection(
    @Param('sectionID', ForumSectionPipe) forumSection: ForumSectionEntity
  ): Promise<ForumPost[]> {
    const forumPosts = await this.forumPostRepo.find({
      sectionID: forumSection.id!,
    });
    return forumPosts.map(_ => forumPostWire(_));
  }

  @Post()
  async createPost(
    @GetSession() user: UserEntity,
    @Param('sectionID', ForumSectionPipe) forumSection: ForumSectionEntity,
    @Body() forumPostDTO: NewForumPostDTO
  ): Promise<ForumPost> {
    const newPost = await this.forumPostRepo.create({
      title: forumPostDTO.title,
      body: forumPostDTO.content,
      sectionID: forumSection.id!,
      userID: user.id!,
      createdAt: Moment().unix(),
      updatedAt: Moment().unix(),
    });
    return forumPostWire(newPost);
  }

  @Get(':postID')
  async getPostByID(
    @Param('postID', ForumPostPipe) forumPost: ForumPostEntity
  ): Promise<ForumPost> {
    return forumPostWire(forumPost);
  }

  @Patch(':postID')
  async updatePostByID(
    @GetSession() user: UserEntity,
    @Param('postID', ForumPostPipe) forumPost: ForumPostEntity,
    @Body() forumPostDTO: UpdateForumPostDTO
  ) {
    await this.ensurePostAccess(user, forumPost);
    await this.forumPostRepo.update({id: forumPost.id!}, forumPostDTO);
  }

  @Delete(':postID')
  async deletePostByID(
    @GetSession() user: UserEntity,
    @Param('postID', ForumPostPipe) forumPost: ForumPostEntity
  ) {
    await this.ensurePostAccess(user, forumPost);
    await this.forumPostRepo.delete({id: forumPost.id!});
  }

  private ensurePostAccess(user: UserEntity, post: ForumPostEntity): void {
    if (!user.rank!.websiteManageForums && !(post.userID === user.id!)) {
      throw new ForbiddenException();
    }
  }
}
