import { Router } from "express";
import { UserRouters } from "./user.route";
import { HistoryRoutes } from "./history.route";

export const baseRoute = Router();

const moduleRoutes = [
    {
        path: "/users",
        route: UserRouters
    },
    {
        path: "/history",
        route: HistoryRoutes
    },
];


moduleRoutes.forEach((route) => {
    baseRoute.use(route.path, route.route)
});