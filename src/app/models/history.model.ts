import { model, Schema } from "mongoose";
import { IHistory } from "../interfaces/history.interface";

const historySchema = new Schema<IHistory>(
    {
        userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        points: { type: Number, required: true },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export const History = model<IHistory>('History', historySchema);