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
exports.validationResults = exports.isKeyRegistered = void 0;
const express_validator_1 = require("express-validator");
const isKeyRegistered = ({ where, model: Model }) => __awaiter(void 0, void 0, void 0, function* () {
    const existValue = yield Model.findOne({ where });
    if (existValue)
        throw new Error(`Values already registered`);
});
exports.isKeyRegistered = isKeyRegistered;
const validationResults = (request, response, next) => {
    const errors = (0, express_validator_1.validationResult)(request);
    console.log(errors);
    if (!errors.isEmpty()) {
        return response.status(400).json(errors);
    }
    next();
};
exports.validationResults = validationResults;
//# sourceMappingURL=validations.js.map