"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const UserDataZodValidation = zod_1.z.object({
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
    email: zod_1.z.string(),
    role: zod_1.z.enum(['user', 'admin', 'vendor']),
    image: zod_1.z.string().optional(),
    password: zod_1.z.string(),
    dateOfBirth: zod_1.z.string().optional()
});
exports.default = UserDataZodValidation;
