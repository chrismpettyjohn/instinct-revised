"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmulatorModule = void 0;
const common_1 = require("@nestjs/common");
const session_module_1 = require("../session/session.module");
const database_module_1 = require("../database/database.module");
const emulator_texts_controller_1 = require("./emulator-texts.controller");
const emulator_settings_controller_1 = require("./emulator-settings.controller");
let EmulatorModule = class EmulatorModule {
};
EmulatorModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule, session_module_1.SessionModule],
        controllers: [emulator_settings_controller_1.EmulatorSettingsController, emulator_texts_controller_1.EmulatorTextsController],
    })
], EmulatorModule);
exports.EmulatorModule = EmulatorModule;
