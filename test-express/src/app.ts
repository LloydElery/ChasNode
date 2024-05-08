// src/index.js
import express, { Express, Request, Response } from "express";
import cors from "cors";
import cardRouter from "./routes/cardRoutes";
import connectDB from "./db/db";

const app: Express = express();

connectDB;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/card", cardRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Test Express as a Server.");
});

export default app;
