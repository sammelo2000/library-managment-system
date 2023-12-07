
const bookRouter = require("express").Router();
const {inputABook,getAllBooks} = require("../controllers/bookController");

bookRouter.get("/",getAllBooks);

bookRouter.get("/:id",(req,res) => {
    res.send("Get book By ID");
})

bookRouter.post("/",inputABook);

bookRouter.delete("/:id",(req,res) => {
    res.send("Delete by id");
});
bookRouter.patch("/:id",(req,res) => {
    res.send("Updated by id");
});




module.exports = bookRouter;



