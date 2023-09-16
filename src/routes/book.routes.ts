import { Router } from "express";
import { bookSchema } from "@/schemas/book.schemas";
import { validateSchema } from "@/middlewares/schemaValidation";
import { bookController } from "@/controllers/book.controllers";

const bookRouter = Router();

bookRouter.get("/books/:id", bookController.getById);
bookRouter.get("/books", bookController.get);
bookRouter.post("/books", validateSchema(bookSchema), bookController.create);
bookRouter.put("/books/:id", validateSchema(bookSchema), bookController.update);
bookRouter.delete("/books/:id", bookController.remove);

export default bookRouter;