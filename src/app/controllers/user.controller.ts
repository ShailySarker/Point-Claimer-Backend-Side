import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.model";
import { userValidation } from "../validations/user.validation";
import z from "zod";

const addUser = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { name } = await userValidation.parseAsync(req.body);
        const user = await User.create({ name });

        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user,
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
};

export const UserControllers = {
    addUser,
}