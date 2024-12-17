"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopRoute = void 0;
const express_1 = __importDefault(require("express"));
const Shop_controller_1 = require("./Shop.controller");
const route = (0, express_1.default)();
route.get("/", Shop_controller_1.ShopController.getAllShopIntoDb);
route.get("/:shopName", Shop_controller_1.ShopController.getSingleShopIntoDb);
route.get("/vendor/:id", Shop_controller_1.ShopController.getVendorShop);
route.post("/", Shop_controller_1.ShopController.createShopintoDb);
// route.delete("/")
route.patch("/:id", Shop_controller_1.ShopController.updateShopIntoDb);
exports.shopRoute = route;
