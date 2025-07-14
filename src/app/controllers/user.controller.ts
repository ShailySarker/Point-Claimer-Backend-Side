import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.model";
import { userValidation } from "../validations/user.validation";

const addUser = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { name } = await userValidation.parseAsync(req.body);

        const existingUser = await User.findOne({ name });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists'
            });
        }

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


const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const users = await User.find().sort({ points: -1 });

        res.status(200).json({
            success: true,
            message: "Users info retrieved successfully",
            data: users,
        });

    } catch (error) {
        console.log(error);
        next(error);
    }

};


export const UserControllers = {
    addUser,
    getAllUsers,

};