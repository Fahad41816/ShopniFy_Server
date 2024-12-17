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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopServices = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createShopintoDb = (ShopData) => __awaiter(void 0, void 0, void 0, function* () {
    const Result = yield prisma.shop.create({
        data: ShopData,
    });
    return Result;
});
const getAllShopIntoDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const Result = yield prisma.shop.findMany({
        include: {
            products: true,
            vendor: true,
            followers: true
        }
    });
    return Result;
});
const GetVendorShopintoDb = (vendorId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.shop.findFirst({
        where: {
            vendorId: vendorId
        },
        include: {
            products: {
                include: {
                    Category: true
                }
            }
        }
    });
    return result;
});
const getSingleShopIntoDb = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const Result = yield prisma.shop.findFirst({
        where: {
            name: name,
        },
        include: {
            products: {
                include: {
                    shops: true
                }
            },
            followers: true
        }
    });
    return Result;
});
const updateShopIntoDb = (id, ShopData) => __awaiter(void 0, void 0, void 0, function* () {
    const Result = yield prisma.shop.update({
        where: {
            id: id,
        },
        data: ShopData
    });
    return Result;
});
exports.ShopServices = {
    createShopintoDb,
    getAllShopIntoDb,
    getSingleShopIntoDb,
    updateShopIntoDb,
    GetVendorShopintoDb
};
