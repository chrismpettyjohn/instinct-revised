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
exports.RoomController = void 0;
const room_pipe_1 = require("./room.pipe");
const room_filter_dto_1 = require("./room-filter.dto");
const common_1 = require("@nestjs/common");
const room_1 = require("../database/room");
let RoomController = class RoomController {
    constructor(roomRepo) {
        this.roomRepo = roomRepo;
    }
    getAll(roomFilterDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const [where, sort] = [
                {},
                {},
            ];
            if (roomFilterDTO.owner) {
                where.ownerName = roomFilterDTO.owner;
            }
            const rooms = yield this.roomRepo.find(where, sort);
            return rooms.map(room => room_1.roomWire(room));
        });
    }
    getMostPopular() {
        return __awaiter(this, void 0, void 0, function* () {
            const mostPopularRooms = yield this.roomRepo.find(undefined, {
                usersMax: 'DESC',
            });
            return mostPopularRooms.map(room => room_1.roomWire(room));
        });
    }
    getByID(room) {
        return room_1.roomWire(room);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [room_filter_dto_1.RoomFilterDTO]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "getAll", null);
__decorate([
    common_1.Get('most_popular'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "getMostPopular", null);
__decorate([
    common_1.Get(':roomID'),
    __param(0, common_1.Param('roomID', room_pipe_1.RoomPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [room_1.RoomEntity]),
    __metadata("design:returntype", Object)
], RoomController.prototype, "getByID", null);
RoomController = __decorate([
    common_1.Controller('rooms'),
    __metadata("design:paramtypes", [room_1.RoomRepository])
], RoomController);
exports.RoomController = RoomController;
