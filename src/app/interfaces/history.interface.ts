import { Types } from "mongoose";

export interface IHistory {
    userId: Types.ObjectId;
    points: number
}