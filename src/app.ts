import express, { json } from "express";
import 'express-async-errors';
import dotenv from "dotenv";
import errorHandler from "@/middlewares/errorHandler";

dotenv.config();
const app = express();
app.use(json());
app.use(errorHandler);

const port: number = Number(process.env.PORT);
app.listen(port, () => console.log(`Server is up and running or port ${port}`));