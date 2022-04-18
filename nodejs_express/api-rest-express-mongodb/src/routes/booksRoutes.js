import express from 'express';
import BookController from '../controllers/booksController.js';

// using express routing
const router = express.Router();

router
    .get('/books', BookController.listBooks)
    .get('/books/search', BookController.listBookByPublisher)
    .get('/books/:id', BookController.listBookId)
    .post('/books', BookController.addBook)
    .put('/books/:id', BookController.updateBook)
    .delete('/books/:id', BookController.deleteBook);

export default router;
