"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.historyValidation = void 0;
const zod_1 = __importDefault(require("zod"));
exports.historyValidation = zod_1.default.object({
    userId: zod_1.default
        .string({ message: 'User ID is required' })
    // .min(1, 'User ID is required')
    ,
    points: zod_1.default
        .number({ message: "Point must be a number" })
        .int({ message: "Point must be a positive number" })
        .min(1, { message: "Point value must be at least 1" })
    //   .max(10),
});
