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
exports.HealthController = void 0;
const common_1 = require("@nestjs/common");
const room_1 = require("../database/room");
const config_1 = require("../database/config");
const user_1 = require("../database/user/user");
let HealthController = class HealthController {
    constructor(userRepo, roomRepo, configRepo) {
        this.userRepo = userRepo;
        this.roomRepo = roomRepo;
        this.configRepo = configRepo;
    }
    getHealth() {
        return __awaiter(this, void 0, void 0, function* () {
            const config = yield this.configRepo.getConfig();
            const health = yield Promise.all([
                this.userRepo
                    .getInstance()
                    .query('SELECT COUNT(*) AS "online_users" FROM users WHERE online = 1'),
                this.roomRepo
                    .getInstance()
                    .query('SELECT COUNT(*) AS "active_rooms" FROM rooms WHERE users > 0'),
            ]);
            return {
                maintenanceMode: config.maintenanceEnabled === 1,
                usersOnline: Number(health[0][0].online_users),
                roomsActive: Number(health[1][0].active_rooms),
                systemVersion: '1.0.0',
            };
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealthController.prototype, "getHealth", null);
HealthController = __decorate([
    common_1.Controller('health'),
    __metadata("design:paramtypes", [user_1.UserRepository,
        room_1.RoomRepository,
        config_1.ConfigRepository])
], HealthController);
exports.HealthController = HealthController;
