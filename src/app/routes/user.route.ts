import { Router } from "express";
import { UserControllers } from "../controllers/user.controller";

const router = Router();

router.post("/add-user", UserControllers.addUser);

export const UserRouters = router;