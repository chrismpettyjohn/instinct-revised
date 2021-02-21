"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSession = void 0;
const common_1 = require("@nestjs/common");
exports.GetSession = common_1.createParamDecorator((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});
