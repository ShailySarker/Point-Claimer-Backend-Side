import { Router } from "express";
import { UserControllers } from "../controllers/user.controller";

const router = Router();

router.post("/add-user", UserControllers.addUser);
router.get("/", UserControllers.getAllUsers);
router.post("/:userId/claim", UserControllers.claimPoints);


export const UserRouters = router;