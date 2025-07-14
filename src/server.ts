import { Server } from 'http';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import app from './app';


dotenv.config();

let server: Server;

const PORT = 1000;


async function main() {
    try {
        await mongoose.connect(process.env.MONGODB_URL as string);

        console.log("Point Claimer is connected into DB!");

        server = app.listen(PORT, () => {
            console.log(`Point Claimer server is running on port ${PORT}!`);
        });
        
    } catch (error) {
        console.log("Not able to connect in MongoDB!", error);
    }

};


main();