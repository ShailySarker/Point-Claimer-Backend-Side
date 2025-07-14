import { Router } from "express";
import { UserRouters } from "./user.route";

export const baseRoute = Router();

const moduleRoutes = [
    {
        path: "/users",
        route: UserRouters
    },
    // {
    //     path: "/history",
    //     route: AuthRoutes
    // },
];


moduleRoutes.forEach((route) => {
    baseRoute.use(route.path, route.route)
});