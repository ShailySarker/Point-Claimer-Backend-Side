"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryRoutes = void 0;
const express_1 = require("express");
const history_controller_1 = require("../controllers/history.controller");
const router = (0, express_1.Router)();
router.get("/all-history", history_controller_1.HistoryControllers.getHistory);
exports.HistoryRoutes = router;
