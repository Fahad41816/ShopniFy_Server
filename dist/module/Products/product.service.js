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
exports.productService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// create
const createProductIntoDb = (Data) => __awaiter(void 0, void 0, void 0, function* () {
    const IsProDuctExits = yield prisma.products.findFirst({
        where: {
            shopId: Data.shopId,
            title: Data.title,
        },
    });
    if (IsProDuctExits) {
        throw new Error("This Product is Allready Exists!");
    }
    const Result = yield prisma.products.create({
        data: Data,
    });
    return Result;
});
const getAllProductIntoDb = (queryOption) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(queryOption === null || queryOption === void 0 ? void 0 : queryOption.page);
    const options = []; // Array to hold dynamic filters
    // 1. Search Term Filter (name, title, and tags)
    if (queryOption.searchTerm) {
        options.push({
            OR: [
                { name: { contains: queryOption.searchTerm, mode: "insensitive" } },
                { title: { contains: queryOption.searchTerm, mode: "insensitive" } },
                {
                    tags: { has: queryOption.searchTerm }, // Check if tags array contains the search term
                },
            ],
        });
    }
    // 2. Category Filter
    if (queryOption.category) {
        options.push({
            Category: { name: queryOption.category },
        });
    }
    // 3. Status Filter
    if (queryOption.Availability) {
        options.push({
            Availability: queryOption.Availability == "In Stock" ? "IN_STOCK" : "OUT_OF_STOCK",
        });
    }
    // 4. Price Range Filter
    if ((queryOption === null || queryOption === void 0 ? void 0 : queryOption.minPrice) &&
        (queryOption === null || queryOption === void 0 ? void 0 : queryOption.maxPrice) &&
        queryOption.minPrice >= 0 &&
        queryOption.maxPrice > 0) {
        options.push({
            price: {
                gte: Number(queryOption.minPrice),
                lte: Number(queryOption.maxPrice),
            },
        });
    }
    // 5. Tags Filtering
    if (queryOption.tags && Array.isArray(queryOption.tags)) {
        options.push({
            tags: { hasSome: queryOption.tags }, // Matches any tags in the array
        });
    }
    // Combine all filters
    const FilterOption = { AND: options };
    // 6. Sorting Logic
    const allowedSortFields = ["price", "title", "createdAt"];
    let orderByOption = {};
    if (queryOption.sortBy && allowedSortFields.includes(queryOption.sortBy)) {
        const sortField = queryOption.sortBy;
        const sortOrder = queryOption.sortOrder === "desc" ? "desc" : "asc";
        orderByOption = { [sortField]: sortOrder };
    }
    // 7. Pagination Logic
    const page = parseInt(String(queryOption.page)) || 1;
    const limit = parseInt(String(queryOption.limit)) || 10;
    const skip = (page - 1) * limit;
    console.dir(FilterOption, { depth: null });
    // Final Query
    const Result = yield prisma.products.findMany({
        // @ts-ignore
        where: FilterOption,
        orderBy: orderByOption, // Apply sorting
        skip: skip, // Apply pagination (offset)
        take: limit, // Number of records to fetch
        include: {
            shops: true,
            Category: true,
        },
    });
    // Total count for pagination
    const totalCount = yield prisma.products.count({
        // @ts-ignore
        where: FilterOption,
    });
    // Return result with meta data
    return {
        data: Result,
        meta: {
            totalCount,
            page,
            limit,
            totalPages: Math.ceil(totalCount / limit),
        },
    };
});
const getProductForHomePage = () => __awaiter(void 0, void 0, void 0, function* () {
    const Result = yield prisma.products.findMany({
        include: {
            Category: true,
            shops: true,
        },
    });
    return Result;
});
// get single
const getSingleDataIntoDb = (shopName, productName) => __awaiter(void 0, void 0, void 0, function* () {
    const Result = yield prisma.products.findFirst({
        where: {
            title: productName,
            shops: {
                name: shopName,
            },
        },
        include: {
            shops: true,
            Reviews: true,
            Category: true,
        },
    });
    return Result;
});
// update
const updateProductIntoDb = (id, shopId, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    console.log(shopId);
    console.log(updateData);
    const Result = yield prisma.products.update({
        where: {
            shopId: shopId,
            id: id,
        },
        data: updateData,
    });
    return Result;
});
// delete
const DeleteProductIntoDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const Result = yield prisma.products.delete({
        where: {
            id: id,
        },
    });
    return Result;
});
exports.productService = {
    createProductIntoDb,
    getAllProductIntoDb,
    updateProductIntoDb,
    DeleteProductIntoDb,
    getSingleDataIntoDb,
    getProductForHomePage,
};
