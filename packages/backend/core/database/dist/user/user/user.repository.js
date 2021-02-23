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
exports.UserRepository = void 0;
const randomstring_1 = __importDefault(require("randomstring"));
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const base_repository_1 = require("../../base.repository");
const common_2 = require("@instinct-api/common");
let UserRepository = class UserRepository extends base_repository_1.BaseRepository {
    constructor(userRepository, hashService) {
        super(userRepository, [
            'rank',
            'joinedGroups',
            'badges',
            'rooms',
            'friends',
            'betaCode',
            'bans',
        ]);
        this.hashService = hashService;
        this.eagerRelations = [
            'rank',
            'joinedGroups',
            'badges',
            'rooms',
            'friends',
            'betaCode',
            'bans',
        ];
    }
    create(user) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.create.call(this, Object.assign(Object.assign({}, user), { password: this.hashService.generate(user.password) }));
        });
    }
    createSSO(userID) {
        return __awaiter(this, void 0, void 0, function* () {
            const authTicket = 'instinct_' + randomstring_1.default.generate(50) + '_' + userID;
            yield this.update({ id: userID }, { authTicket });
            return authTicket;
        });
    }
};
UserRepository = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        common_2.HashService])
], UserRepository);
exports.UserRepository = UserRepository;
