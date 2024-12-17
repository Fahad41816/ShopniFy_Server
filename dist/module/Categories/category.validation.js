"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const CategoryZodValidation = zod_1.z.object({
    name: zod_1.z.string(),
    image: zod_1.z.string()
});
exports.default = CategoryZodValidation;
