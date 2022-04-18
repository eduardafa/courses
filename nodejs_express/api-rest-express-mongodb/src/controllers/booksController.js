import books from '../models/Book.js';

class BookController {
    // methods
    // GET
    static listBooks = (req, res) => {
        books.find((err, books) => {
            res.status(200).json(books);
        });
    };

    static listBookId = (req, res) => {
        const id = req.params.id;

        books.findById(id, (err, books) => {
            if (err) {
                res.status(400).send({
                    message: `${err.message} - book id not found!`,
                });
            } else {
                res.status(200).send(books);
            }
        });
    };

    // POST
    static addBook = (req, res) => {
        let book = new books(req.body);

        book.save((err) => {
            if (err) {
                // if there is some error in the register process
                res.status(500).send({
                    message: `${err.message} - failure in the book register process`,
                });
            } else {
                // status 201 is often used to indicate success in the creation process
                // .toJSON send the info to json file
                res.status(201).send(book.toJSON());
            }
        });
    };

    // PUT
    static updateBook = (req, res) => {
        const id = req.params.id;

        // set is reserved word in MongoDB
        books.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            // if there is no error
            if (!err) {
                res.status(200).send({
                    message: 'The book was updated successfully!',
                });
            } else {
                res.status(500).send({ message: err.message });
            }
        });
    };

    // DELETE
    static deleteBook = (req, res) => {
        const id = req.params.id;

        books.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(200).send({
                    message: `Book removed successfully!`,
                });
            }
        });
    };
}

export default BookController;
