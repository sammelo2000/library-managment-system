const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    edition: {
        type: String,
        requiered: true
    }
});

 const Book = mongoose.model('Book',bookSchema);

 module.exports = Book;


