"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../../controllers");
const users_middlewares_1 = __importDefault(require("./users.middlewares"));
const router = (0, express_1.Router)();
router.get("/", users_middlewares_1.default.getAll, controllers_1.usersControllers.getAll);
router.get("/:id", users_middlewares_1.default.getById, controllers_1.usersControllers.getById);
router.post("/", users_middlewares_1.default.createUser, controllers_1.usersControllers.createUser);
router.put("/:id", users_middlewares_1.default.updateUser, controllers_1.usersControllers.updateUser);
router.delete("/:id", users_middlewares_1.default.deleteUser, controllers_1.usersControllers.deleteUser);
exports.default = router;
//# sourceMappingURL=users.routes.js.map