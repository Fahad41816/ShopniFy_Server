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
exports.followerController = void 0;
const CatchAsync_1 = __importDefault(require("../../utils/CatchAsync"));
const followers_service_1 = require("./followers.service");
const createFollower = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield followers_service_1.followerServices.CreateFollowShopintoDb(data);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Follow Shop Successfully!",
        data: result,
    });
}));
const UnFollowShop = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield followers_service_1.followerServices.UnFollowShopIntoDb(id);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "UnFollow Shop Successfully!",
    });
}));
exports.followerController = {
    UnFollowShop,
    createFollower,
};
