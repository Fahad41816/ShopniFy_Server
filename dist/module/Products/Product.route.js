"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoute = void 0;
const express_1 = __importDefault(require("express"));
const products_controller_1 = require("./products.controller");
const ValidationCheck_1 = __importDefault(require("../../Middleware/ValidationCheck"));
const product_validation_1 = __importDefault(require("./product.validation"));
const Route = express_1.default.Router();
// get all  
Route.get('/', products_controller_1.ProductController.getAllProductIntoDb);
Route.get('/Home', products_controller_1.ProductController.getAllProductForHomePage);
// get single 
Route.get('/:shopName/:productName', products_controller_1.ProductController.getSingleDataIntoDb);
// post data 
Route.post('/', (0, ValidationCheck_1.default)(product_validation_1.default), products_controller_1.ProductController.createProductIntoDb);
// update data 
Route.patch('/:id/:shopId', products_controller_1.ProductController.updateProductIntoDb);
// delete product 
Route.delete('/:id', products_controller_1.ProductController.DeleteProduct);
exports.ProductRoute = Route;
