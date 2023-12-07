const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config({path: "../backend/server/config.env"});
const  bookRouter = require("./routes/bookRoute");
const app = express();


app.use(express.json());
app.use("/api/books",bookRouter);

mongoose.connect(process.env.ATLAS_URI).then(() => {
    const port = process.env.PORT;
    console.log("Database connected succesfully")
    app.listen(port, () => {
        console.log(`App is listening on Port:${port}`);
    })
}).catch(err => {
    console.log(err);
})


app.get("/",(req,res) => {
    res.status(201).json({
        name:"sam",
        userName: "MeMe"
    });
});