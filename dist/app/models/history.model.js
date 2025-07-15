"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.History = void 0;
const mongoose_1 = require("mongoose");
const historySchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    points: { type: Number, required: true },
}, {
    timestamps: true,
    versionKey: false
});
exports.History = (0, mongoose_1.model)('History', historySchema);
