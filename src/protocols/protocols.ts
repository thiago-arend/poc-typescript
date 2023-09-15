export type ApplicationError = {
    name: string;
    message: string;
};

export type Book = {
    id: number;
    title: string;
	author: string;
	year: number;
	publisher: string;
}

export type CreateBook = Omit<Book, "id">;