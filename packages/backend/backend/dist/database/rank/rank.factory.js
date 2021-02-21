"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rankFactory = void 0;
const typeorm_1 = require("typeorm");
const rank_entity_1 = require("./rank.entity");
function rankFactory(changes) {
    return typeorm_1.getRepository(rank_entity_1.RankEntity).save(Object.assign({ name: 'Testing', badge: 'BETA', level: 1 }, changes));
}
exports.rankFactory = rankFactory;
