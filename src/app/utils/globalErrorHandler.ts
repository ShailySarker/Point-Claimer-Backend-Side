import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

export const globalErrorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {

    let payload: any = { success: false, error: error };

    if (error instanceof ZodError) {
        const issues = error.issues.map(issue => ({
            path: issue.path.join('.'),
            code: issue.code,
            message: issue.message,
            origin: (issue as any).origin,
            minimum: (issue as any).minimum,
            inclusive: (issue as any).inclusive
        }));

        payload = {
            success: false,
            message: issues[0].message,
            issues
        };
    } else {
        payload = {
            success: false,
            message: error.message || 'Something went wrong',
            error: error
        };
    }

    return res.status(400).json(payload);

};