"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_route_1 = require("../module/Categories/Category.route");
const express_1 = __importDefault(require("express"));
const Product_route_1 = require("../module/Products/Product.route");
const user_Route_1 = require("../module/Users/user.Route");
const Shop_Route_1 = require("../module/Shop/Shop.Route");
const PaymentGetway_route_1 = require("../module/PaymentGetway/PaymentGetway.route");
const followers_route_1 = require("../module/Followers/followers.route");
const orders_route_1 = require("../module/orders/orders.route");
const Review_route_1 = require("../module/Reviews/Review.route");
const route = express_1.default.Router();
const Routers = [
    {
        id: 1,
        path: "/category",
        element: Category_route_1.CategoryRoute
    },
    {
        id: 2,
        path: "/product",
        element: Product_route_1.ProductRoute
    },
    {
        id: 3,
        path: "/auth",
        element: user_Route_1.UserRoute
    },
    {
        id: 4,
        path: "/shop",
        element: Shop_Route_1.shopRoute
    },
    {
        id: 5,
        path: "/payment",
        element: PaymentGetway_route_1.PaymentGetwayRoute
    },
    {
        id: 6,
        path: "/Follow",
        element: followers_route_1.FollowerRoute
    },
    {
        id: 7,
        path: "/orders",
        element: orders_route_1.OrdersRoute
    },
    {
        id: 7,
        path: "/reviews",
        element: Review_route_1.ReviewRoute
    }
];
Routers.map(data => {
    route.use(data.path, data.element);
});
exports.default = route;
