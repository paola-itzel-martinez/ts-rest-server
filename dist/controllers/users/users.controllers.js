"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getById = exports.getAll = void 0;
const models_1 = require("../../models");
const getAll = (_, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield models_1.User.findAll();
        response.json(user);
    }
    catch (error) {
        response.status(500).json(error);
    }
});
exports.getAll = getAll;
const getById = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    try {
        const user = yield models_1.User.findByPk(id);
        if (user)
            response.json(user);
        response.status(404).json({ error: "Not found" });
    }
    catch (error) {
        response.status(500).json(error);
    }
});
exports.getById = getById;
const createUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = request;
    try {
        const user = models_1.User.build(body);
        yield user.save();
        response.json(user);
    }
    catch (error) {
        response.status(500).json(error);
    }
});
exports.createUser = createUser;
const updateUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const { name, email } = request.body;
    try {
        const user = yield models_1.User.findByPk(id);
        if (!user) {
            return response.status(400).json({ error: 'Not found' });
        }
        yield (user === null || user === void 0 ? void 0 : user.update({ name, email }));
        response.json(user);
    }
    catch (error) {
        response.status(500).json(error);
    }
});
exports.updateUser = updateUser;
const deleteUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    try {
        const user = yield models_1.User.findByPk(id);
        if (!user) {
            return response.status(400).json({ error: 'Not found' });
        }
        yield (user === null || user === void 0 ? void 0 : user.update({ status: false }));
        response.json(user);
    }
    catch (error) {
        response.status(500).json(error);
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.controllers.js.map