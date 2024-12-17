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
exports.ProductController = void 0;
const CatchAsync_1 = __importDefault(require("../../utils/CatchAsync"));
const product_service_1 = require("./product.service");
// get all product for homepage 
const getAllProductForHomePage = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_service_1.productService.getProductForHomePage();
    res.status(200).json({
        success: true,
        status: 200,
        message: "Products Retrive Successfully!",
        data: result,
    });
}));
// get
const getAllProductIntoDb = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const queryOption = req.query;
    const result = yield product_service_1.productService.getAllProductIntoDb(queryOption);
    res.status(200).json({
        success: true,
        status: 200,
        message: "Products Retrive Successfully!",
        data: result,
    });
}));
const createProductIntoDb = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Result = yield product_service_1.productService.createProductIntoDb(req.body);
    res.status(200).json({
        success: true,
        status: 200,
        message: "Create Product Successfully!",
        data: Result,
    });
}));
// get single
const getSingleDataIntoDb = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_service_1.productService.getSingleDataIntoDb(req.params.shopName, req.params.productName);
    res.status(200).json({
        success: true,
        status: 200,
        message: "Product Retrive Successfully!",
        data: result,
    });
}));
// update
const updateProductIntoDb = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Result = yield product_service_1.productService.updateProductIntoDb(req.params.id, req.params.shopId, req.body);
    res.status(200).json({
        success: true,
        status: 200,
        message: "Product update Successfully!",
        data: Result,
    });
}));
const DeleteProduct = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Result = yield product_service_1.productService.DeleteProductIntoDb(req.params.id);
    res.status(200).json({
        success: true,
        status: 200,
        message: "Product Deleted Successfully!",
        data: Result,
    });
}));
exports.ProductController = {
    updateProductIntoDb,
    getSingleDataIntoDb,
    getAllProductIntoDb,
    createProductIntoDb,
    DeleteProduct,
    getAllProductForHomePage
};
