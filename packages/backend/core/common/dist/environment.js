"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultUserHomeRoom = exports.maxAccountsPerIP = exports.defaultUserPoints = exports.defaultUserPixels = exports.defaultUserCredits = exports.defaultUserLook = exports.defaultUserMotto = exports.defaultUserRank = exports.jwtExpires = exports.jwtSecret = exports.databaseName = exports.databasePass = exports.databaseUser = exports.databaseHost = exports.getEnvOrFail = void 0;
function getEnvOrFail(key) {
    const value = process.env[key];
    if (!value) {
        throw new Error('Missing environment token');
    }
    return value;
}
exports.getEnvOrFail = getEnvOrFail;
exports.databaseHost = getEnvOrFail('DATABASE_HOST');
exports.databaseUser = getEnvOrFail('DATABASE_USER');
exports.databasePass = getEnvOrFail('DATABASE_PASS');
exports.databaseName = getEnvOrFail('DATABASE_NAME');
exports.jwtSecret = getEnvOrFail('JWT_SECRET');
exports.jwtExpires = Number(getEnvOrFail('JWT_EXPIRES'));
exports.defaultUserRank = Number(getEnvOrFail('DEFAULT_USER_RANK'));
exports.defaultUserMotto = getEnvOrFail('DEFAULT_USER_MOTTO');
exports.defaultUserLook = getEnvOrFail('DEFAULT_USER_LOOK');
exports.defaultUserCredits = Number(getEnvOrFail('DEFAULT_USER_CREDITS'));
exports.defaultUserPixels = Number(getEnvOrFail('DEFAULT_USER_PIXELS'));
exports.defaultUserPoints = Number(getEnvOrFail('DEFAULT_USER_POINTS'));
exports.maxAccountsPerIP = Number(getEnvOrFail('MAX_ACCOUNTS_PER_IP'));
exports.defaultUserHomeRoom = Number(getEnvOrFail('DEFAULT_USER_HOME_ROOM'));
