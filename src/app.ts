import express, { type Application, Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import * as routes from "./routes";

dotenv.config();

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use('/api', routes.sessionRoutes);
app.use('/api', routes.userRoutes);
app.use('/api', routes.orderRoutes);
app.use('/api', routes.productRoutes);

app.get("/", (req, res) => {
    res.send("Bienvenido a DeliFood API");
});

mongoose.set('strictQuery', true);
async function connect() {
    return await mongoose.connect(process.env.MONGODB_URI ?? "", {dbName: 'delifood'});
}
connect().catch((error) => console.log(`Error database mongo: ${error}`));

export default app;