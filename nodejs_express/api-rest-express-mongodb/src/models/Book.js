import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    id: { type: String },
    title: { type: String, required: true },
    // author: { type: String, required: true },
    // the reference to author is linked to a schema
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'authors',
        required: true,
    },
    publisher: { type: String, required: true },
    numberPages: { type: Number },
});

// books collection following the book schema
// name of the collection: books
const books = mongoose.model('books', bookSchema);

export default books;
