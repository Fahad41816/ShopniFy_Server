"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowerRoute = void 0;
const express_1 = __importDefault(require("express"));
const followers_controller_1 = require("./followers.controller");
const Route = express_1.default.Router();
Route.post("/", followers_controller_1.followerController.createFollower);
Route.delete("/upfollow/:id", followers_controller_1.followerController.UnFollowShop);
exports.FollowerRoute = Route;
