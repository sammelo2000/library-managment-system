const mongoose = require("mongoose");
const Schema = mongoose.Schema;
bookSchema = new Schema({
    author: String,
    title : String,

});

module.exports = mongoose.model("bookModel",bookSchema);


