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
exports.PhotoService = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const photo_1 = require("../database/photo");
let PhotoService = class PhotoService {
    constructor(photoRepository) {
        this.photoRepository = photoRepository;
        this.eageRelations = ['user'];
    }
    getAll() {
        return this.photoRepository.find({
            relations: this.eageRelations,
        });
    }
    getByID(photoID) {
        return this.photoRepository.findOneOrFail({
            where: {
                id: photoID,
            },
            relations: this.eageRelations,
        });
    }
};
PhotoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(photo_1.PhotoEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PhotoService);
exports.PhotoService = PhotoService;
