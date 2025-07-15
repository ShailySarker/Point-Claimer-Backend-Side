"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const base_route_1 = require("./app/routes/base.route");
const globalErrorHandler_1 = require("./app/utils/globalErrorHandler");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// cors
app.use((0, cors_1.default)({
    origin: ['http://localhost:5173', "https://point-claimer-frontend.vercel.app"]
}));
// route
app.use("/api/v1/", base_route_1.baseRoute);
// root page
app.get('/', (req, res) => {
    res.send('Welcome to Point Claimer System!!!');
});
// global error handler
app.use(globalErrorHandler_1.globalErrorHandler);
// 404 error
app.use((req, res) => {
    res.status(404).json({ message: 'Sorry! The route is not found.' });
});
exports.default = app;
