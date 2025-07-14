import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.model";
import { History } from "../models/history.model";

const claimPoints = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { userId } = req.params;
        const points = Math.floor(Math.random() * 10) + 1;
        console.log(userId, points);
        
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


export const HistoryControllers = {
    claimPoints,

}