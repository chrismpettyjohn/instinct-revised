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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BetaCodeController = void 0;
const uuid_1 = require("uuid");
const permission_scope_decorator_1 = require("../session/permission-scope.decorator");
const common_1 = require("@nestjs/common");
const beta_code_1 = require("../database/beta-code");
let BetaCodeController = class BetaCodeController {
    constructor(betaCodeRepo) {
        this.betaCodeRepo = betaCodeRepo;
    }
    createBetaCode() {
        return __awaiter(this, void 0, void 0, function* () {
            const newBetaCode = yield this.betaCodeRepo.create({
                betaCode: `INSTINCT-${uuid_1.v4()}`.toUpperCase().slice(0, 32),
            });
            return beta_code_1.betaCodeWire(newBetaCode);
        });
    }
    getBetaCodes() {
        return __awaiter(this, void 0, void 0, function* () {
            const betaCodes = yield this.betaCodeRepo.find();
            return betaCodes.map(_ => beta_code_1.betaCodeWire(_));
        });
    }
    deleteBetaCode(betaCode) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.betaCodeRepo.delete({ betaCode });
            return 'Beta code deleted';
        });
    }
};
__decorate([
    common_1.Post(),
    permission_scope_decorator_1.HasScope('websiteManageBetaCodes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BetaCodeController.prototype, "createBetaCode", null);
__decorate([
    common_1.Get(),
    permission_scope_decorator_1.HasScope('websiteManageBetaCodes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BetaCodeController.prototype, "getBetaCodes", null);
__decorate([
    common_1.Delete(':betaCode'),
    permission_scope_decorator_1.HasScope('websiteManageBetaCodes'),
    __param(0, common_1.Param('betaCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BetaCodeController.prototype, "deleteBetaCode", null);
BetaCodeController = __decorate([
    common_1.Controller('beta-codes'),
    __metadata("design:paramtypes", [beta_code_1.BetaCodeRepository])
], BetaCodeController);
exports.BetaCodeController = BetaCodeController;
