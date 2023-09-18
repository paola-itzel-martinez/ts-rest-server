"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const models_1 = require("../../models");
const middleware_1 = require("../../middleware");
const getAll = [];
const getById = [
    (0, express_validator_1.check)('id', 'id is required').not().isEmpty(),
    middleware_1.validationResults
];
const createUser = [
    (0, express_validator_1.check)('name', 'name is required').not().isEmpty(),
    (0, express_validator_1.check)('email', 'email not allowed').isEmail(),
    (0, express_validator_1.check)('email').custom((email) => (0, middleware_1.isKeyRegistered)({
        where: { email },
        model: models_1.User
    })),
    middleware_1.validationResults
];
const updateUser = [
    (0, express_validator_1.check)('id', 'id is required').not().isEmpty(),
    (0, express_validator_1.check)('email').custom((email) => (0, middleware_1.isKeyRegistered)({
        where: { email },
        model: models_1.User
    })),
    middleware_1.validationResults
];
const deleteUser = [
    (0, express_validator_1.check)('id', 'id is required').not().isEmpty(),
];
exports.default = {
    getAll,
    getById,
    createUser,
    updateUser,
    deleteUser,
};
//# sourceMappingURL=users.middlewares.js.map