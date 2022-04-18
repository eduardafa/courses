import express from 'express';
import db from './config/dbConnect.js';
import books from './models/Book.js';

// linking terminal and log from mongodb
db.on('error', console.log.bind(console, 'Connection error!'));
// opening the connection
db.once('open', () => {
    console.log(
        'The connection with the database has been established successfully!'
    );
});

const app = express();

// telling to express that notation json must be used
app.use(express.json());

// const books = [
//     { id: 1, title: 'The lord of the rings' },
//     { id: 2, title: 'The hobbit' },
// ];

// routes
// GET
app.get('/', (req, res) => {
    res.status(200).send('NodeJS course');
});

// GET all
app.get('/books', (req, res) => {
    books.find((err, books) => {
        res.status(200).json(books);
    });
});

// GET id
app.get('/books/:id', (req, res) => {
    let index = searchBook(req.params.id);
    res.json(books[index]);
});

// POST
app.post('/books', (req, res) => {
    // push is a method to include something in the array
    books.push(req.body);
    res.status(201).send('The book was added successfully.');
});

// PUT
app.put('/books/:id', (req, res) => {
    let index = searchBook(req.params.id);
    books[index].title = req.body.title;
    res.json(books);
});

// DELETE
app.delete('/books/:id', (req, res) => {
    let { id } = req.params;
    let index = searchBook(id);
    // splice is an method to remove one item from the array
    books.splice(index, 1);
    res.send(`Book ${id} removed successfully!`);
});

function searchBook(id) {
    return books.findIndex((book) => book.id == id);
}

export default app;
