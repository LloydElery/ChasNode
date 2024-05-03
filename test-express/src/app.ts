// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app: Express = express();
app.use(cors());

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Test Express as a Server.");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});