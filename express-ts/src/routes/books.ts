import { Router } from "express";
import {
  addBook,
  getAllBooks,
  getBook,
  updateBook,
  deleteBook,
} from "../controllers/bookcontroller";

const bookRouter = Router();

bookRouter.get("/", getAllBooks);
bookRouter.post("/", addBook);
bookRouter.get("/:id", getBook);
bookRouter.put("/:id", updateBook);
bookRouter.delete("/:id", deleteBook);

export default bookRouter;
