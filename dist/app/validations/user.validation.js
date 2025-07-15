"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const zod_1 = __importDefault(require("zod"));
exports.userValidation = zod_1.default.object({
    name: zod_1.default
        .string({ message: "Name must be a string!" })
        .min(2, { message: "Name must be at least 2 characters long." })
        .max(50, { message: "Name cannot exceed 50 characters." }),
    points: zod_1.default
        .number({ message: "Point must be a number" })
        .int({ message: "Point must be a positive number" })
        .min(0, { message: "Point must be a positive number" })
        .default(0),
});
