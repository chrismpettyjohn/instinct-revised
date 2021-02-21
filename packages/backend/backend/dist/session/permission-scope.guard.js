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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionScopeGuard = void 0;
const core_1 = require("@nestjs/core");
const rank_1 = require("../database/rank");
const common_1 = require("@nestjs/common");
let PermissionScopeGuard = class PermissionScopeGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const scope = this.reflector.get('scope', context.getHandler());
        const request = context.switchToHttp().getRequest();
        const grantedScopes = rank_1.rankWire(request.user.rank).permissions;
        const hasScope = grantedScopes[scope];
        if (!hasScope) {
            throw new common_1.ForbiddenException("You don't have permission to do this");
        }
        return hasScope;
    }
};
PermissionScopeGuard = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [core_1.Reflector])
], PermissionScopeGuard);
exports.PermissionScopeGuard = PermissionScopeGuard;
