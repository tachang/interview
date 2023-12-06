import {Book} from '../Models/book'

type Data = {
    books: Book[]
}

const db: Data = {books: []}

class database {

    createOrUpdateBook(book: Book) {
        db.books.push(book)
    }

    getBookByISBN(isbn: string): Book | undefined {
        return db.books.find((b) => b.isbn === isbn)
    }

    checkConnectionStatus(): boolean {
        return true
    }
}

export const Database = new database()
