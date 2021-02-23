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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BetaCodeRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const beta_code_entity_1 = require("./beta-code.entity");
const base_repository_1 = require("../base.repository");
const typeorm_2 = require("@nestjs/typeorm");
let BetaCodeRepository = class BetaCodeRepository extends base_repository_1.BaseRepository {
    constructor(betaCodeEntity) {
        super(betaCodeEntity, ['user']);
    }
};
BetaCodeRepository = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(beta_code_entity_1.BetaCodeEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BetaCodeRepository);
exports.BetaCodeRepository = BetaCodeRepository;
