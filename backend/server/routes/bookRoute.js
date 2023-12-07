
const bookRouter = require("express").Router();

bookRouter.get("/",(req,res) => {
    res.send("Getting all the books")
});

bookRouter.get("/:id",(req,res) => {
    res.send("Get book By ID");
})

bookRouter.post("/",(req,res) => {
    res.send("Input a Book");
})

bookRouter.delete("/:id",(req,res) => {
    res.send("Delete by id");
})
bookRouter.patch("/:id",(req,res) => {
    res.send("Updated by id");
})




module.exports = bookRouter;



