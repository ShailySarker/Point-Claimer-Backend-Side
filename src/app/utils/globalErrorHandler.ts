import { NextFunction, Request, Response } from "express";

export const globalErrorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {

    // validation error
    if (error.name === 'ValidationError') {
        res.status(400).json({
            message: 'Validation failed',
            success: false,
            error: {
                name: error.name,
                errors: error.errors
            }
        })
    }
    // cast error
    else if (error.name === "CastError") {
        res.status(404).json({
            message: 'Book is not found',
            success: false,
            error: {
                name: error.name,
                errors: error
            }
        })
    }
    // duplicate key error
    else if (error.name === "MongoServerError" && error.code === 11000) {
        res.status(409).json({
            message: "Duplicate key error",
            success: false,
            error: {
                name: error.name,
                errors: error,
            }
        });
    }
    // others error
    else {
        res.status(400).json({
            message: error.message || 'Sorry! Something went wrong.',
            success: false,
            error
        });
    }

};