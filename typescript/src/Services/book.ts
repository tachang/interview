import {Book} from '../Models/book'
import {Database} from '../Databases/lowdb'
import {Request, Response} from 'express'

class bookController {
    createOrUpdateBook = async (req: Request, res: Response) => {
        const input: Book = {
            title: req.body.title,
            author: req.body.author,
            isbn: req.body.isbn
        }
        const output = Database.createOrUpdateBook(input)
        res.status(201).send(output)
    }

    getBookByISBN = async (req: Request, res: Response) => {
        const isbn = req.params.isbn
        const book = Database.getBookByISBN(isbn)
        const response = typeof(book) === "undefined" ? `Book with isbn ${isbn} not registered` : book
        res.send(response)
    }
}

export const BookController = new bookController()