import { bookRepository } from "@/repositories/book.repositories";
import { Book } from "@/protocols/protocols";
import { errors } from "@/errors/errors";

async function getById(id: number): Promise<Book> {
    const result = await bookRepository.getById(id);
    if (!result) throw errors.notFound();

    return result;
}

async function get(): Promise<Book[]> {
    const result = await bookRepository.get();

    return result;
}

async function create(title: string, author: string, year: number, publisher: string): Promise<void> {
    const result = await bookRepository.getByTitleAndYear(title, year);
    if (result) throw errors.conflict();

    await bookRepository.create(title, author, year, publisher);
}

async function update(id: number, title: string, author: string, year: number, publisher: string): Promise<void> {
    const result = await bookRepository.getById(id);
    if (!result) throw errors.notFound();

    await bookRepository.update(id, title, author, year, publisher);
}

async function remove(id: number): Promise<void> {
    const result = await bookRepository.getById(id);
    if (!result) throw errors.notFound();

    await bookRepository.remove(id);
}

export const bookService = { getById, get, create, update, remove };