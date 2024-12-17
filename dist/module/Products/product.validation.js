"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const ProductZodValidation = zod_1.z.object({
    shopId: zod_1.z.string(),
    title: zod_1.z.string(),
    image: zod_1.z.string(),
    stock: zod_1.z.number(),
    categoryId: zod_1.z.string(),
    price: zod_1.z.number(),
    tags: zod_1.z.string().array(),
});
exports.default = ProductZodValidation;
