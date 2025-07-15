"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserControllers = void 0;
const user_model_1 = require("../models/user.model");
const user_validation_1 = require("../validations/user.validation");
const history_model_1 = require("../models/history.model");
const addUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = yield user_validation_1.userValidation.parseAsync(req.body);
        const existingUser = yield user_model_1.User.findOne({ name });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists'
            });
        }
        const user = yield user_model_1.User.create({ name });
        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user,
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = Math.max(1, parseInt(req.query.page) || 1);
        const limit = 10;
        const skip = (page - 1) * limit;
        const [total, users] = yield Promise.all([
            user_model_1.User.countDocuments(),
            user_model_1.User.find().skip(skip).limit(limit).lean(),
        ]);
        res.json({
            success: true,
            data: users,
            page,
            totalPages: Math.ceil(total / limit),
            total,
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
const getUsersLeaderboardInfo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_model_1.User.find().sort({ points: -1 });
        res.status(200).json({
            success: true,
            message: "Users leadership info retrieved successfully",
            data: users,
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
const claimPoints = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const points = Math.floor(Math.random() * 10) + 1;
        // console.log(userId, points);
        const user = yield user_model_1.User.findByIdAndUpdate(userId, { $inc: { points } }, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        yield history_model_1.History.create({
            userId: user._id,
            points
        });
        const claimedInfo = { user, pointsAwarded: points };
        res.status(200).json({
            success: true,
            message: "Claim point successfully",
            data: claimedInfo,
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.UserControllers = {
    addUser,
    getAllUsers,
    getUsersLeaderboardInfo,
    claimPoints
};
