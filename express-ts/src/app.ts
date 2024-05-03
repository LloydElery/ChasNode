// src/index.js
import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();

app.use(cors())

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/user/1", (req: Request, res: Response) => {
  res.send({user: "Seb", email: "seb@seb.se"});
});

export default app;
