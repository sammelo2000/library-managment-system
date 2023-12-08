
const bookRouter = require("express").Router();
const {
    inputABook,
    getAllBooks,
    getSingleBook
} = require("../controllers/bookController");

bookRouter.get("/",getAllBooks);

bookRouter.get("/:id",getSingleBook);

bookRouter.post("/",inputABook);

bookRouter.delete("/:id",(req,res) => {
    res.send("Delete by id");
});
bookRouter.patch("/:id",(req,res) => {
    res.send("Updated by id");
});




module.exports = bookRouter;



