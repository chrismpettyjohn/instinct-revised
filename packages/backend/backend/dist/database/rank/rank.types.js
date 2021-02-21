"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissionStatusToBoolean = exports.booleanToPermissionStatus = exports.PermissionStatus = void 0;
var PermissionStatus;
(function (PermissionStatus) {
    PermissionStatus["Enabled"] = "1";
    PermissionStatus["Disabled"] = "0";
})(PermissionStatus = exports.PermissionStatus || (exports.PermissionStatus = {}));
function booleanToPermissionStatus(value) {
    return value ? PermissionStatus.Enabled : PermissionStatus.Disabled;
}
exports.booleanToPermissionStatus = booleanToPermissionStatus;
function permissionStatusToBoolean(permissionStatus) {
    return permissionStatus === PermissionStatus.Enabled;
}
exports.permissionStatusToBoolean = permissionStatusToBoolean;
