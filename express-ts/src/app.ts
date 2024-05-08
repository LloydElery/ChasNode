// src/index.js
import express, { Express, Request, Response } from "express";
import cors from "cors";
import bookRouter from "./routes/books";
import connectDB from "./db/db";

const app: Express = express();

// Koppling mot MognoDB
connectDB;

const people = [
  { user: "Dennis", id: 1 },
  { user: "InteDennis", id: 2 },
  { user: "Anna", id: 3 },
  { user: "Berit", id: 4 },
  { user: "Carl", id: 5 },
  { user: "David", id: 6 },
  { user: "Erik", id: 7 },
  { user: "Frida", id: 8 },
  { user: "Gustav", id: 9 },
  { user: "Hanna", id: 10 },
  { user: "Ingrid", id: 11 },
  { user: "Johan", id: 12 },
];

app.use(cors());

app.use("/api/books", bookRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/user/people/:id", (req: Request, res: Response) => {
  // Id = det vi hämtar genom vår URI
  const userID = parseInt(req.params.id);
  // Leta i array[people] och hitta user{objektet} som matchar userID
  const user = people.find((user) => user.id === userID);
  // Skriv ut usern
  res.send(user);
});

app.post("/user", (req: Request, res: Response) => {
  res.send({ user: "user_name", email: "user_email" });
});

app.put("/user/1", (req: Request, res, Response) => {
  res.send({ user: "Denke", email: "Denke@email.com" });
});

app.delete("/user/1", (req: Request, res: Response) => {
  res.send({ user: "Dennis", email: "Dennis@email.com" });
});

export default app;
