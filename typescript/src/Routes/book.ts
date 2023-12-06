import express from 'express';
import { BookController } from '.././Services/book'

export const router = express.Router()

router.post('/', BookController.createOrUpdateBook)

router.get('/:isbn', BookController.getBookByISBN)
