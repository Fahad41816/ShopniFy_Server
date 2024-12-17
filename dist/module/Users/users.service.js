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
exports.userService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const CreateUserIntoDb = (UserData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.$transaction((prisma) => __awaiter(void 0, void 0, void 0, function* () {
        // Create the user
        const Result = yield prisma.user.create({
            data: UserData,
        });
        // If the role is vendor, create a shop
        if (UserData.role === "vendor") {
            yield prisma.shop.create({
                data: {
                    vendorId: Result.id,
                    status: "Progress",
                },
            });
        }
        return Result; // Return the created user data
    }));
});
const LoginUserIntoDb = (UserData) => __awaiter(void 0, void 0, void 0, function* () {
    const Result = yield prisma.user.findFirst({
        where: {
            email: UserData.email,
        },
        include: {
            shop: true
        }
    });
    return Result;
});
exports.userService = {
    CreateUserIntoDb,
    LoginUserIntoDb,
};