import { Router } from "express";
import { bookSchema } from "@/schemas/book.schemas";
import { validateSchema } from "@/middlewares/schemaValidation";

const bookRouter = Router();

bookRouter.get("/books/:id");
bookRouter.get("/books");
bookRouter.post("/books");
bookRouter.put("/books/:id");
bookRouter.delete("/books/:id");

export default bookRouter;