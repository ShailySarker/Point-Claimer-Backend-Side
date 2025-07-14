import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const userSchema = new Schema<IUser>(
    {
        name: { type: String, required: true, unique: true },
        points: { type: Number, default: 0 },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export const User = model<IUser>('User', userSchema);