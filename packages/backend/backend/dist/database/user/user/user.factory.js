"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userFactory = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
function userFactory(changes) {
    return typeorm_1.getRepository(user_entity_1.UserEntity).save(Object.assign({ username: 'Test', motto: 'Testing', email: 'test@testing.com', password: 'password', rankID: 0, figure: '-', credits: 10, pixels: 10, online: '1' }, changes));
}
exports.userFactory = userFactory;
