"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseRoute = void 0;
const express_1 = require("express");
const user_route_1 = require("./user.route");
const history_route_1 = require("./history.route");
exports.baseRoute = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/users",
        route: user_route_1.UserRouters
    },
    {
        path: "/history",
        route: history_route_1.HistoryRoutes
    },
];
moduleRoutes.forEach((route) => {
    exports.baseRoute.use(route.path, route.route);
});
