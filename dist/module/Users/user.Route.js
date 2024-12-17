"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("./users.controller");
const route = express_1.default.Router();
route.post('/login', users_controller_1.userController.LoginUser);
route.post('/create', users_controller_1.userController.CreateUser);
exports.UserRoute = route;
