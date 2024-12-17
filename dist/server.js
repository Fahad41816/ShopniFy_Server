"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
function main() {
    app_1.default.listen(7000, () => {
        console.log(`server Listening port ${7000}...`);
    });
}
main();
