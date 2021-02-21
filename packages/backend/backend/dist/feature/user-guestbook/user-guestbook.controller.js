"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGuestbookController = void 0;
const moment_1 = __importDefault(require("moment"));
const user_pipe_1 = require("../../user/user.pipe");
const user_guestbook_pipe_1 = require("./user-guestbook.pipe");
const user_guestbook_dto_1 = require("./user-guestbook.dto");
const get_session_decorator_1 = require("../../session/get-session.decorator");
const has_session_decorator_1 = require("../../session/has-session.decorator");
const user_entity_1 = require("../../database/user/user/user.entity");
const rank_types_1 = require("../../database/rank/rank.types");
const guestbook_wire_1 = require("../../database/user/guestbook/guestbook.wire");
const guestbook_entity_1 = require("../../database/user/guestbook/guestbook.entity");
const guestbook_repository_1 = require("../../database/user/guestbook/guestbook.repository");
const common_1 = require("@nestjs/common");
let UserGuestbookController = class UserGuestbookController {
    constructor(guestbookRepo) {
        this.guestbookRepo = guestbookRepo;
    }
    createPost(user, session, guestbookDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const newPost = yield this.guestbookRepo.create({
                id: undefined,
                authorID: session.id,
                profileID: user.id,
                content: guestbookDTO.content,
                timestamp: moment_1.default().unix(),
            });
            return guestbook_wire_1.userGuestbookWire(newPost);
        });
    }
    getPosts(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield this.guestbookRepo.find({ profileID: user.id });
            return posts.map(_ => guestbook_wire_1.userGuestbookWire(_));
        });
    }
    updatePost(post, user, guestbookDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            if (post.authorID !== user.id &&
                user.rank.websiteManageGuestbook !== rank_types_1.PermissionStatus.Enabled) {
                throw new common_1.ForbiddenException();
            }
            yield this.guestbookRepo.update({ id: post.id }, guestbookDTO);
            return 'Post has been updated';
        });
    }
    deletePost(post, user) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(post.authorID, user.id);
            if (post.authorID !== user.id &&
                user.rank.websiteManageGuestbook !== rank_types_1.PermissionStatus.Enabled) {
                throw new common_1.ForbiddenException();
            }
            yield this.guestbookRepo.delete({ id: post.id });
            return 'Post has been deleted';
        });
    }
};
__decorate([
    common_1.Post(),
    has_session_decorator_1.HasSession(),
    __param(0, common_1.Param('userID', user_pipe_1.UserPipe)),
    __param(1, get_session_decorator_1.GetSession()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        user_entity_1.UserEntity,
        user_guestbook_dto_1.UserGuestbookPostDTO]),
    __metadata("design:returntype", Promise)
], UserGuestbookController.prototype, "createPost", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Param('userID', user_pipe_1.UserPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], UserGuestbookController.prototype, "getPosts", null);
__decorate([
    common_1.Patch(':guestbookID'),
    has_session_decorator_1.HasSession(),
    __param(0, common_1.Param('guestbookID', user_guestbook_pipe_1.UserGuestbookPipe)),
    __param(1, get_session_decorator_1.GetSession()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [guestbook_entity_1.UserGuestbookEntity,
        user_entity_1.UserEntity,
        user_guestbook_dto_1.UserGuestbookPostDTO]),
    __metadata("design:returntype", Promise)
], UserGuestbookController.prototype, "updatePost", null);
__decorate([
    common_1.Delete(':guestbookID'),
    has_session_decorator_1.HasSession(),
    __param(0, common_1.Param('guestbookID', user_guestbook_pipe_1.UserGuestbookPipe)),
    __param(1, get_session_decorator_1.GetSession()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [guestbook_entity_1.UserGuestbookEntity,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], UserGuestbookController.prototype, "deletePost", null);
UserGuestbookController = __decorate([
    common_1.Controller('users/:userID/guestbook'),
    __metadata("design:paramtypes", [guestbook_repository_1.UserGuestbookRepository])
], UserGuestbookController);
exports.UserGuestbookController = UserGuestbookController;
