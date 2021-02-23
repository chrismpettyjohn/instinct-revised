"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const common_2 = require("@instinct-api/common");
const database_meta_1 = require("./database.meta");
const common_3 = require("@instinct-api/common");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    common_1.Module({
        imports: [
            common_2.CommonModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: common_3.databaseHost,
                username: common_3.databaseUser,
                password: common_3.databasePass,
                database: common_3.databaseName,
                entities: database_meta_1.databaseEntities,
                synchronize: false,
            }),
            typeorm_1.TypeOrmModule.forFeature(database_meta_1.databaseEntities),
        ],
        providers: [...database_meta_1.databaseRepositories],
        exports: [typeorm_1.TypeOrmModule, ...database_meta_1.databaseRepositories],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
