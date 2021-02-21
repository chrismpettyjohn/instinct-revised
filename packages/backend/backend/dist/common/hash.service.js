"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const common_1 = require("@nestjs/common");
let HashService = class HashService {
    generate(raw) {
        return bcryptjs_1.default.hashSync(raw);
    }
    compare(raw, hashed) {
        return bcryptjs_1.default.compareSync(raw, hashed);
    }
};
HashService = __decorate([
    common_1.Injectable()
], HashService);
exports.HashService = HashService;
