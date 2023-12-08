const Book = require("../models/bookModel");
const asyncHandler = require("express-async-handler");


const inputABook = asyncHandler (async (req,res) => {
    const {author,title, edition} = req.body;
    if(!author || !title || !edition) {
        res.send("Missing field");
    }
    const book = new Book({author,title,edition});

  try{  
    await book.save();

    res.send("Book added");
    

    }catch(err) {
        res.send(err);
    }

}
);


const getAllBooks = asyncHandler (async (req,res) => {
    try {
       const  book = await Book.find({});
       res.send(book);
    } catch (error) {
        res.send(error);
    }
});

const getSingleBook = asyncHandler(async (req,res) => {
    try {
        const id = req.params.id;
        const book = await Book.find({'_id':{ $in :id } });
        res.send(book);
    } catch (error) {
        res.send(error);
    }
})

module.exports = {
    inputABook,
    getAllBooks,
    getSingleBook
}