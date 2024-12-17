"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersRoute = void 0;
const express_1 = __importDefault(require("express"));
const orders_controller_1 = require("./orders.controller");
const route = (0, express_1.default)();
route.get('/:userId', orders_controller_1.orderController.getUserOrders);
exports.OrdersRoute = route;
