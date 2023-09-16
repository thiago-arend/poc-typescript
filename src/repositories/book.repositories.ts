import { db } from "@/database/database.connection";
import { CreateBook } from "@/protocols/protocols";
import { Book } from "@/protocols/protocols";

async function getById(id: number): Promise<Book> {
    const result = await db.query<Book>(`SELECT * FROM book WHERE id=$1;`, [id]);
    
    return result.rows[0];
}

async function getByTitleAndYear(title: string, year: number): Promise<Book> {
    const result = await db.query<Book>(`
        SELECT * FROM book WHERE title=$1 AND year=$2;`, [title, year]);
    
    return result.rows[0];
}

async function get(title: string | undefined): Promise<Book[]> {
    const baseQuery: string = `SELECT * FROM book`;
    let complementQuery: string = ``;
    const values: string[] = [];

    if (title) {
        complementQuery += ` WHERE title ILIKE $1`;
        values.push(`%${title}%`);
    }
    const result = await db.query<Book>( (baseQuery + complementQuery), values);
    
    return result.rows;
}

async function create(title: string, author: string, year: number, publisher: string): Promise<void> {
    await db.query<CreateBook>(`INSERT INTO book (title, author, year, publisher) VALUES ($1, $2, $3, $4);`,
        [title, author, year, publisher]);
}

async function update(id: number, title: string, author: string, year: number, publisher: string): Promise<void> {
    await db.query<Book>(`UPDATE book SET (title, author, year, publisher) = ($1, $2, $3, $4) WHERE id=$5;`,
        [title, author, year, publisher, id]);
}

async function remove(id: number): Promise<void> {
    await db.query<Book>(`DELETE FROM book WHERE id=$1;`,
        [id]);
}

export const bookRepository = { getById, getByTitleAndYear, get, create, update, remove };