import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.model";
import { userValidation } from "../validations/user.validation";
import { History } from "../models/history.model";

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


const claimPoints = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { userId } = req.params;
        const points = Math.floor(Math.random() * 10) + 1;
        // console.log(userId, points);
        
        const user = await User.findByIdAndUpdate(
            userId,
            { $inc: { points } },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await History.create({
            userId: user._id,
            points
        });

        const claimedInfo = { user, pointsAwarded: points }
        res.status(200).json({
            success: true,
            message: "Claim point successfully",
            data: claimedInfo,
        });

    } catch (error) {
        console.log(error);
        next(error);
    }

};

export const UserControllers = {
    addUser,
    getAllUsers,
    claimPoints

};