"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userConstraints = void 0;
const user_exists_1 = require("./user-exists");
const unique_email_1 = require("./unique-email");
const unique_username_1 = require("./unique-username");
exports.userConstraints = [
    unique_email_1.UniqueEmailConstraint,
    unique_username_1.UniqueUsernameConstraint,
    user_exists_1.UserExistsConstraint,
];
