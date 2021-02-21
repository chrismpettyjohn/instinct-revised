"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxAccountsPerIP = void 0;
function getEnvOrFail(key) {
    const value = process.env[key];
    if (!value) {
        throw new Error('Missing environment token');
    }
    return value;
}
exports.maxAccountsPerIP = Number(getEnvOrFail('MAX_ACCOUNTS_PER_IP'));
