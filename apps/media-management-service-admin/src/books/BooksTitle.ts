import { Books as TBooks } from "../api/books/Books";

export const BOOKS_TITLE_FIELD = "name";

export const BooksTitle = (record: TBooks): string => {
  return record.name?.toString() || String(record.id);
};
