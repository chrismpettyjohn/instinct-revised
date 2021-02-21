"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BetaCodeModule = void 0;
const common_1 = require("@nestjs/common");
const beta_code_guard_1 = require("./beta-code.guard");
const beta_code_constraint_1 = require("./beta-code.constraint");
const beta_code_controller_1 = require("./beta-code.controller");
const database_module_1 = require("../database/database.module");
let BetaCodeModule = class BetaCodeModule {
};
BetaCodeModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [beta_code_controller_1.BetaCodeController],
        providers: [beta_code_constraint_1.BetaCodeConstraint, beta_code_guard_1.BetaModeGuard],
        exports: [beta_code_constraint_1.BetaCodeConstraint, beta_code_guard_1.BetaModeGuard],
    })
], BetaCodeModule);
exports.BetaCodeModule = BetaCodeModule;
