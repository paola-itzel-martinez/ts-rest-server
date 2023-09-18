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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("../db/connection"));
const routes_1 = require("../routes");
class Server {
    constructor() {
        this.apiRoutes = {
            users: {
                url: "/api/users",
                path: "../routes/users/users.routes",
            },
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "8000";
        this.dbConnection();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static("public"));
    }
    routes() {
        this.app.use(this.apiRoutes.users.url, routes_1.userRoutes);
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.info("DB connected");
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.info(`Server listen on ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map