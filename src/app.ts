import express, { Application, Request, Response } from "express";
import cors from "cors";



const app: Application = express();

app.use(cors());
app.use(express.json());


// root page
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Point Claimer System!!!')
});


// 404 error
app.use((req: Request, res: Response) => {
    res.status(404).json({ message: 'Sorry! The route is not found.' })
});

export default app;