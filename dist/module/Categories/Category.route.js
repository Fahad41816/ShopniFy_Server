"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoute = void 0;
const express_1 = __importDefault(require("express"));
const categori_controller_1 = require("./categori.controller");
const ValidationCheck_1 = __importDefault(require("../../Middleware/ValidationCheck"));
const category_validation_1 = __importDefault(require("./category.validation"));
const route = express_1.default.Router();
route.post('/', (0, ValidationCheck_1.default)(category_validation_1.default), categori_controller_1.CategoryController.createCategory);
route.get('/', categori_controller_1.CategoryController.getAllCategory);
// route.patch('/', async(req, res)=>{})
// route.delete('/', async(req, res)=>{})
exports.CategoryRoute = route;
