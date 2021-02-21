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
exports.ConfigRepository = void 0;
const node_cache_1 = __importDefault(require("node-cache"));
const common_1 = require("@nestjs/common");
const config_entity_1 = require("./config.entity");
const typeorm_1 = require("@nestjs/typeorm");
const base_repository_1 = require("../base.repository");
const typeorm_2 = require("typeorm");
let ConfigRepository = class ConfigRepository extends base_repository_1.BaseRepository {
    constructor(configRepo) {
        super(configRepo, []);
        this.cache = new node_cache_1.default();
    }
    update(conditions, changes) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield _super.update.call(this, {}, changes);
            this.cache.del('config');
        });
    }
    getConfig(noCache) {
        return __awaiter(this, void 0, void 0, function* () {
            const cachedConfig = this.cache.get('config');
            if (cachedConfig && !noCache) {
                return cachedConfig;
            }
            const freshCache = yield this.findOneOrFail();
            this.cache.set('config', freshCache);
            return freshCache;
        });
    }
};
ConfigRepository = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(config_entity_1.ConfigEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ConfigRepository);
exports.ConfigRepository = ConfigRepository;
