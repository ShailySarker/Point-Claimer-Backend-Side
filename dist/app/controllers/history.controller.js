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
exports.HistoryControllers = void 0;
const history_model_1 = require("../models/history.model");
const getHistory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const history = yield history_model_1.History.find()
            .sort({ createdAt: -1 })
            .populate('userId', 'name');
        res.json(history);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.HistoryControllers = {
    getHistory,
};
