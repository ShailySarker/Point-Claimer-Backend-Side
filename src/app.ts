import express, { Application, Request, Response } from "express";
import cors from "cors";
import { baseRoute } from "./app/routes/base.route";
import { globalErrorHandler } from "./app/utils/globalErrorHandler";


const app: Application = express();

app.use(cors());
app.use(express.json());


// route
app.use("/api/v1/", baseRoute);


// root page
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Point Claimer System!!!')
});

// global error handler
app.use(globalErrorHandler);

// 404 error
app.use((req: Request, res: Response) => {
    res.status(404).json({ message: 'Sorry! The route is not found.' })
});

export default app;