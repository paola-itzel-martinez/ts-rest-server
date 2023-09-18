"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enviromentDB = void 0;
exports.enviromentDB = {
    table: process.env.DB_TABLE || '',
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
};
//# sourceMappingURL=index.js.map