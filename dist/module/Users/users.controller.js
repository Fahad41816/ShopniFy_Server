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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const client_1 = require("@prisma/client");
const createToken_1 = __importDefault(require("../../Hook/createToken"));
const CatchAsync_1 = __importDefault(require("../../utils/CatchAsync"));
const users_service_1 = require("./users.service");
const bcrypt_1 = __importDefault(require("bcrypt"));
const pisma = new client_1.PrismaClient();
const CreateUser = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const IsUserExists = yield pisma.user.findFirst({
        where: {
            email: req.body.email,
        },
    });
    if (IsUserExists) {
        res.status(409).json({
            success: true,
            message: "User Allready Exists!",
        });
        return;
    }
    const PassHash = yield bcrypt_1.default.hash(req.body.password, 10);
    req.body.password = PassHash;
    const Result = users_service_1.userService.CreateUserIntoDb(req.body);
    res.status(200).json({
        success: true,
        message: "User Create SuccessFully!",
        data: Result,
    });
}));
const LoginUser = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const IsExistsUser = yield users_service_1.userService.LoginUserIntoDb(req.body);
    if (!IsExistsUser) {
        res.status(404).json({
            success: false,
            status: 404,
            message: "Email or password invalid!",
        });
        return;
    }
    const IsPassMatch = yield bcrypt_1.default.compare(req.body.password, IsExistsUser === null || IsExistsUser === void 0 ? void 0 : IsExistsUser.password);
    if (!IsPassMatch) {
        res.status(404).json({
            success: false,
            status: 404,
            message: "Email or password invalid!",
        });
        return;
    }
    const TokenData = {
        name: IsExistsUser.firstName + " " + IsExistsUser.lastName,
        email: IsExistsUser.email,
        role: IsExistsUser.role,
        image: IsExistsUser.image,
    };
    const userToken = yield (0, createToken_1.default)(TokenData);
    res.cookie("Token", userToken, {
        httpOnly: true, // Accessible by the frontend
        secure: true, // Use HTTPS in production
        sameSite: 'none', // Prevent CSRF
        maxAge: 3600000, // Cookie expiry time (1 hour)
    });
    const { password } = IsExistsUser, data = __rest(IsExistsUser, ["password"]);
    res.status(200).json({
        success: true,
        message: "User login Successfully!",
        data: data
    });
}));
exports.userController = {
    CreateUser,
    LoginUser,
};
