import { NextFunction, Request, Response } from "express";
import { History } from "../models/history.model";

const getHistory = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const history = await History.find()
            .sort({ createdAt: -1 })
            .populate('userId', 'name');
        res.json(history);
    } catch (error) {
        console.log(error);
        next(error);
    }

};


export const HistoryControllers = {
    getHistory,

}