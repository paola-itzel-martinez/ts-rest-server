"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
router.get("/", [], controllers_1.usersControllers.getAllUsers);
exports.default = router;
//# sourceMappingURL=users.routes.js.map