import { Router } from "express";
import { HistoryControllers } from "../controllers/history.controller";

const router = Router();

router.post("/:userId/claim", HistoryControllers.claimPoints);

export const HistoryRoutes = router;