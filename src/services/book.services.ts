import { bookRepository } from "@/repositories/book.repositories";
import { CreateBook } from "@/protocols/protocols";
import { Book } from "@/protocols/protocols";
import { number } from "joi";

/* ************************************** REALIZAR AS VALIDAÇÕES ****************************** */

async function getById(id: number): Promise<Book> {
    const result = await bookRepository.getById(id);

    return result;
}

async function get(): Promise<Book[]> {
    const result = await bookRepository.get();

    return result;
}

async function create(title: string, author: string, year: number, publisher: string): Promise<void> {
    await bookRepository.create(title, author, year, publisher);
}

async function update(id: number, title: string, author: string, year: number, publisher: string): Promise<void> {
    await bookRepository.update(id, title, author, year, publisher);
}

async function remove(id: number): Promise<void> {
    await bookRepository.remove(id);
}

export const bookService = { getById, get, create, update, remove };