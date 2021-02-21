"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HasScope = exports.RequireScope = void 0;
const has_session_decorator_1 = require("./has-session.decorator");
const permission_scope_guard_1 = require("./permission-scope.guard");
const common_1 = require("@nestjs/common");
const RequireScope = (scope) => common_1.SetMetadata('scope', scope);
exports.RequireScope = RequireScope;
function HasScope(scope) {
    return common_1.applyDecorators(has_session_decorator_1.HasSession(), common_1.SetMetadata('scope', scope), common_1.UseGuards(permission_scope_guard_1.PermissionScopeGuard));
}
exports.HasScope = HasScope;
