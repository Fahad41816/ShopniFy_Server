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
exports.ShopController = void 0;
const CatchAsync_1 = __importDefault(require("../../utils/CatchAsync"));
const Shop_service_1 = require("./Shop.service");
const createShopintoDb = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ShopData = req.body;
    const Result = yield Shop_service_1.ShopServices.createShopintoDb(ShopData);
    res.status(200).json({
        success: true,
        message: "Shop Create Successfully!",
        data: Result,
    });
}));
const getAllShopIntoDb = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Shop_service_1.ShopServices.getAllShopIntoDb();
    res.status(200).json({
        success: true,
        message: "Shops Retrive Successfully!",
        data: result,
    });
}));
const getSingleShopIntoDb = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const shopName = req.params.shopName;
    console.log(shopName);
    const result = yield Shop_service_1.ShopServices.getSingleShopIntoDb(shopName);
    res.status(200).json({
        success: true,
        message: "Shop Retrive Successfully!",
        data: result,
    });
}));
const getVendorShop = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const vendorId = req.params.id;
    const result = yield Shop_service_1.ShopServices.GetVendorShopintoDb(vendorId);
    res.status(200).json({
        success: true,
        message: "Vendor Shop Retrive Successfully!",
        data: result,
    });
}));
const updateShopIntoDb = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const shopData = req.body;
    console.log(id);
    console.log(shopData);
    const Result = yield Shop_service_1.ShopServices.updateShopIntoDb(id, shopData);
    res.status(200).json({
        success: true,
        message: "Shop Update Successfully!",
        data: Result,
    });
}));
exports.ShopController = {
    createShopintoDb,
    getAllShopIntoDb,
    updateShopIntoDb,
    getSingleShopIntoDb,
    getVendorShop
};
