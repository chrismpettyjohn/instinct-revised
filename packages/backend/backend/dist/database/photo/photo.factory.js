"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.photoFactory = void 0;
const moment_1 = __importDefault(require("moment"));
const typeorm_1 = require("typeorm");
const user_factory_1 = require("../user/user/user.factory");
const photo_entity_1 = require("./photo.entity");
function photoFactory(changes) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield user_factory_1.userFactory();
        return typeorm_1.getRepository(photo_entity_1.PhotoEntity).save(Object.assign({ id: undefined, user, roomID: 0, imagePath: '/blah.png', createdAt: moment_1.default().unix() }, changes));
    });
}
exports.photoFactory = photoFactory;
