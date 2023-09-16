import { CreateBook } from "@/protocols/protocols";
import { Request, Response } from "express";
import { bookService } from "@/services/book.services";
import httpStatus from "http-status";

async function getById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const book = await bookService.getById(Number(id));

    res.status(httpStatus.OK).send(book);
}

async function get(req: Request, res: Response): Promise<void> {
    const books = await bookService.get();

    res.status(httpStatus.OK).send(books);
}

async function create(req: Request, res: Response): Promise<void> {
    const { title, author, year, publisher } = req.body as CreateBook;

    await bookService.create(title, author, year, publisher);
    res.sendStatus(httpStatus.CREATED);
}

async function update(req: Request, res: Response): Promise<void> {
    const { title, author, year, publisher } = req.body as CreateBook;
    const { id } = req.params;

    await bookService.update(Number(id), title, author, year, publisher);
    res.sendStatus(httpStatus.NO_CONTENT);
}

async function remove(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    await bookService.remove(Number(id));
    res.sendStatus(httpStatus.NO_CONTENT);
}

export const bookController = { getById, get, create, update, remove };