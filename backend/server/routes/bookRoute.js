
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






module.exports = bookRouter;



