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
exports.CategoryController = void 0;
const Category_service_1 = require("./Category.service");
const CatchAsync_1 = __importDefault(require("../../utils/CatchAsync"));
const createCategory = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Result = yield Category_service_1.categoryService.createCategoryIntoDb(req.body);
    res.status(200).json({
        success: true,
        message: "Category Data add Successfully!",
        data: Result,
    });
}));
const getAllCategory = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Result = yield Category_service_1.categoryService.getAllCategoryIntoDb();
    res.status(200).json({
        success: true,
        message: "Category Data Retrive Successfully!",
        data: Result,
    });
}));
exports.CategoryController = {
    createCategory,
    getAllCategory,
};
