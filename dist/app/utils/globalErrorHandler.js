"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const zod_1 = require("zod");
const globalErrorHandler = (error, req, res, next) => {
    let payload = { success: false, error: error };
    if (error instanceof zod_1.ZodError) {
        const issues = error.issues.map(issue => ({
            path: issue.path.join('.'),
            code: issue.code,
            message: issue.message,
            origin: issue.origin,
            minimum: issue.minimum,
            inclusive: issue.inclusive
        }));
        payload = {
            success: false,
            message: issues[0].message,
            issues
        };
    }
    else {
        payload = {
            success: false,
            message: error.message || 'Something went wrong',
            error: error
        };
    }
    return res.status(400).json(payload);
};
exports.globalErrorHandler = globalErrorHandler;
