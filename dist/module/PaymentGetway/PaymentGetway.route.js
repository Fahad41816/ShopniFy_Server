"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentGetwayRoute = void 0;
const express_1 = __importDefault(require("express"));
const SSLCOMMERZ_1 = require("./SSLCOMMERZ");
const route = express_1.default.Router();
route.post('/sslcommerz', SSLCOMMERZ_1.sslcommerz.sslcommerzPaymentProccess);
route.post('/sslcommerz/PaymentSuccess/:tranId', SSLCOMMERZ_1.sslcommerz.sslcommerzPaymentSuccess);
exports.PaymentGetwayRoute = route;
