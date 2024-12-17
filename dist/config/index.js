"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    Port: 7000,
    JWtSecret: process.env.Jwt_Secret,
    sslcommerz_StoreId: process.env.SSLCOMMERZ_STOREID,
    sslcommerz_StorePass: process.env.SSLCOMMERZ_STOREPASS,
};
