import mongoose from "mongoose";
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

module.exports = mongoose.model('Book',bookSchema);
