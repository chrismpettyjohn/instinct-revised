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
exports.ManageUsersController = void 0;
const moment_1 = __importDefault(require("moment"));
const user_pipe_1 = require("../../user/user.pipe");
const manage_users_types_1 = require("./manage-users.types");
const user_entity_1 = require("../../database/user/user/user.entity");
const permission_scope_decorator_1 = require("../../session/permission-scope.decorator");
const user_wire_1 = require("../../database/user/user/user.wire");
const user_repository_1 = require("../../database/user/user/user.repository");
const common_1 = require("@nestjs/common");
let ManageUsersController = class ManageUsersController {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userRepo.find();
            return users.map(_ => user_wire_1.internalUserWire(_));
        });
    }
    createUser(userDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = yield this.userRepo.create(Object.assign(Object.assign({}, userDTO), { ipCurrent: '', ipRegister: '', accountCreated: moment_1.default().unix(), accountDayOfBirth: 1, mailVerified: 0, lastLogin: 0, lastOnline: 0, gender: 'm', online: '0' }));
            return user_wire_1.internalUserWire(newUser);
        });
    }
    updateUser(user, userDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userRepo.update({ id: user.id }, userDTO);
            const updatedUser = yield this.userRepo.findOneOrFail({ id: user.id });
            return user_wire_1.internalUserWire(updatedUser);
        });
    }
    deleteUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userRepo.delete({ id: user.id });
            return 'User has been deleted';
        });
    }
};
__decorate([
    common_1.Get(),
    permission_scope_decorator_1.HasScope('websiteManageUsers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ManageUsersController.prototype, "getAll", null);
__decorate([
    common_1.Post(),
    permission_scope_decorator_1.HasScope('websiteManageUsers'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [manage_users_types_1.InternalUserDTO]),
    __metadata("design:returntype", Promise)
], ManageUsersController.prototype, "createUser", null);
__decorate([
    common_1.Patch(':userID'),
    permission_scope_decorator_1.HasScope('websiteManageUsers'),
    __param(0, common_1.Param('userID', user_pipe_1.UserPipe)),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        manage_users_types_1.InternalUserDTO]),
    __metadata("design:returntype", Promise)
], ManageUsersController.prototype, "updateUser", null);
__decorate([
    common_1.Delete(':userID'),
    permission_scope_decorator_1.HasScope('websiteManageUsers'),
    __param(0, common_1.Param('userID', user_pipe_1.UserPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], ManageUsersController.prototype, "deleteUser", null);
ManageUsersController = __decorate([
    common_1.Controller('admin/users'),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], ManageUsersController);
exports.ManageUsersController = ManageUsersController;
