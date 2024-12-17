"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewRoute = void 0;
const express_1 = __importDefault(require("express"));
const Reviews_controler_1 = require("./Reviews.controler");
const route = (0, express_1.default)();
route.post('/', Reviews_controler_1.reviewController.createReview);
exports.ReviewRoute = route;
