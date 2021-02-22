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
exports.ConfigController = void 0;
const config_dto_1 = require("./config.dto");
const common_1 = require("@nestjs/common");
const permission_scope_decorator_1 = require("../session/permission-scope.decorator");
const config_repository_1 = require("../database/config/config.repository");
const config_wire_1 = require("../database/config/config.wire");
let ConfigController = class ConfigController {
    constructor(configRepo) {
        this.configRepo = configRepo;
    }
    getConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            const config = yield this.configRepo.getConfig();
            return config_wire_1.configWire(config);
        });
    }
    getFullConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            const config = yield this.configRepo.getConfig();
            return config_wire_1.configDTOWire(config);
        });
    }
    updateConfig(configDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.configRepo.update({}, Object.assign(Object.assign({}, configDTO), { siteBeta: configDTO.siteBeta ? 1 : 0, websocketEnabled: configDTO.websocketEnabled ? 1 : 0, maintenanceEnabled: configDTO.maintenanceEnabled ? 1 : 0 }));
            const updatedConfig = yield this.configRepo.findOneOrFail();
            return config_wire_1.configWire(updatedConfig);
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConfigController.prototype, "getConfig", null);
__decorate([
    common_1.Get('full'),
    permission_scope_decorator_1.HasScope('websiteManageConfig'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConfigController.prototype, "getFullConfig", null);
__decorate([
    common_1.Post(),
    permission_scope_decorator_1.HasScope('websiteManageConfig'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [config_dto_1.UpdateConfigDTO]),
    __metadata("design:returntype", Promise)
], ConfigController.prototype, "updateConfig", null);
ConfigController = __decorate([
    common_1.Controller('config'),
    __metadata("design:paramtypes", [config_repository_1.ConfigRepository])
], ConfigController);
exports.ConfigController = ConfigController;
