import { Router } from "express";
import { HistoryControllers } from "../controllers/history.controller";

const router = Router();

router.get("/all-history", HistoryControllers.getHistory);

export const HistoryRoutes = router;