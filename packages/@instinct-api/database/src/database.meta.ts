import {Provider} from '@nestjs/common';
import {RankEntity, RankRepository} from './rank';
import {RoomEntity, RoomRepository} from './room';
import {PhotoEntity, PhotoRepository} from './photo';
import {GroupEntity, GroupRepository} from './group';
import {ConfigEntity, ConfigRepository} from './config';
import {BetaCodeEntity, BetaCodeRepository} from './beta-code';
import {UserBanEntity, UserBanRepository} from './user/bans';
import {UserEntity, UserBadgesEntity, UserRepository} from './user/user';
import {UserGuestbookEntity, UserGuestbookRepository} from './user/guestbook';
import {
  UserForgotPasswordEntity,
  UserForgotPasswordRepository,
} from './user/forgot-password';
import {
  EmulatorSettingsEntity,
  EmulatorSettingsRepository,
  EmulatorTextsEntity,
  EmulatorTextsRepository,
} from './emulator';
import {
  ArticleCategoryRepository,
  ArticleEntity,
  ArticleCategoryEntity,
  ArticleRepository,
  ArticleCommentEntity,
  ArticleCommentRepository,
} from './article';
import {ForumPostEntity} from './forum/forum-post.entity';
import {ForumReplyEntity} from './forum/forum-reply.entity';
import {ForumSectionEntity} from './forum/forum-section.entity';
import {ForumReactionEntity} from './forum/forum-reaction.entity';
import {ForumPostRepository} from './forum/forum-post.repository';
import {ForumReplyRepository} from './forum/forum-reply.repository';
import {ForumReactionRepository} from './forum/forum-reaction.repository';
import {ForumSectionRepository} from './forum/forum-section.repository';
import {ShopPackageEntity} from './web-store/package/shop-package.entity';
import {ShopPackageRepository} from './web-store/package/shop-package.repository';

export const databaseEntities: Function[] = [
  RankEntity,
  UserEntity,
  RoomEntity,
  PhotoEntity,
  GroupEntity,
  ConfigEntity,
  UserBanEntity,
  ArticleEntity,
  ForumPostEntity,
  ForumReactionEntity,
  ForumReplyEntity,
  ForumSectionEntity,
  BetaCodeEntity,
  UserBadgesEntity,
  EmulatorTextsEntity,
  UserGuestbookEntity,
  ArticleCommentEntity,
  ArticleCategoryEntity,
  EmulatorSettingsEntity,
  UserForgotPasswordEntity,
  ShopPackageEntity,
];

export const databaseRepositories: Provider[] = [
  RankRepository,
  UserRepository,
  RoomRepository,
  GroupRepository,
  PhotoRepository,
  ForumPostRepository,
  ForumSectionRepository,
  ForumReactionRepository,
  ForumReplyRepository,
  ConfigRepository,
  ArticleRepository,
  UserBanRepository,
  BetaCodeRepository,
  EmulatorTextsRepository,
  UserGuestbookRepository,
  ArticleCommentRepository,
  ShopPackageRepository,
  ArticleCategoryRepository,
  EmulatorSettingsRepository,
  UserForgotPasswordRepository,
];
