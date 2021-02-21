"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomModule = void 0;
const room_pipe_1 = require("./room.pipe");
const common_1 = require("@nestjs/common");
const room_service_1 = require("./room.service");
const room_controller_1 = require("./room.controller");
const database_module_1 = require("../database/database.module");
let RoomModule = class RoomModule {
};
RoomModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [room_controller_1.RoomController],
        providers: [room_pipe_1.RoomPipe, room_service_1.RoomService],
        exports: [room_pipe_1.RoomPipe, room_service_1.RoomService],
    })
], RoomModule);
exports.RoomModule = RoomModule;
