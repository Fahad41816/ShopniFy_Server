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
exports.reviewController = void 0;
const CatchAsync_1 = __importDefault(require("../../utils/CatchAsync"));
const Reviews_service_1 = require("./Reviews.service");
const createReview = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const RiviewData = req.body;
    console.log(RiviewData);
    const result = yield Reviews_service_1.reviewService.createReviewintodb(RiviewData);
    res.status(200).json({
        success: true,
        status: 200,
        message: "Review Created successFully!",
        data: result
    });
}));
exports.reviewController = {
    createReview
};
