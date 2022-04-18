import authors from '../models/Author.js';

class AuthorController {
    // methods
    // GET
    static listAuthors = (req, res) => {
        authors.find((err, authors) => {
            res.status(200).json(authors);
        });
    };

    static listAuthorId = (req, res) => {
        const id = req.params.id;

        authors.findById(id, (err, authors) => {
            if (err) {
                res.status(400).send({
                    message: `${err.message} - author id not found!`,
                });
            } else {
                res.status(200).send(authors);
            }
        });
    };

    // POST
    static addAuthor = (req, res) => {
        let author = new authors(req.body);

        author.save((err) => {
            if (err) {
                // if there is some error in the register process
                res.status(500).send({
                    message: `${err.message} - failure in the author register process`,
                });
            } else {
                // status 201 is often used to indicate success in the creation process
                // .toJSON send the info to json file
                res.status(201).send(author.toJSON());
            }
        });
    };

    // PUT
    static updateAuthor = (req, res) => {
        const id = req.params.id;

        // set is reserved word in MongoDB
        authors.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            // if there is no error
            if (!err) {
                res.status(200).send({
                    message: 'The author was updated successfully!',
                });
            } else {
                res.status(500).send({ message: err.message });
            }
        });
    };

    // DELETE
    static deleteAuthor = (req, res) => {
        const id = req.params.id;

        authors.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(200).send({
                    message: `author removed successfully!`,
                });
            }
        });
    };
}

export default AuthorController;
