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
exports.EmulatorTextsController = void 0;
const common_1 = require("@nestjs/common");
const permission_scope_decorator_1 = require("../session/permission-scope.decorator");
const emulator_texts_wire_1 = require("../database/emulator/emulator-texts.wire");
const emulator_texts_repository_1 = require("../database/emulator/emulator-texts.repository");
let EmulatorTextsController = class EmulatorTextsController {
    constructor(emulatorTextsRepo) {
        this.emulatorTextsRepo = emulatorTextsRepo;
    }
    getTexts() {
        return __awaiter(this, void 0, void 0, function* () {
            const texts = yield this.emulatorTextsRepo.find();
            return emulator_texts_wire_1.emulatorTextsWire(texts);
        });
    }
    updateSettings(emulatorTextsDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all(emulatorTextsDTO.map(_ => {
                return this.emulatorTextsRepo.update({ key: _.id }, { value: _.value });
            }));
            const updatedTexts = yield this.emulatorTextsRepo.find();
            return emulator_texts_wire_1.emulatorTextsWire(updatedTexts);
        });
    }
};
__decorate([
    common_1.Get(),
    permission_scope_decorator_1.HasScope('websiteManageEmulator'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmulatorTextsController.prototype, "getTexts", null);
__decorate([
    common_1.Patch(),
    permission_scope_decorator_1.HasScope('websiteManageEmulator'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], EmulatorTextsController.prototype, "updateSettings", null);
EmulatorTextsController = __decorate([
    common_1.Controller('emulator/texts'),
    __metadata("design:paramtypes", [emulator_texts_repository_1.EmulatorTextsRepository])
], EmulatorTextsController);
exports.EmulatorTextsController = EmulatorTextsController;
