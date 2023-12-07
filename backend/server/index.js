const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config({path: "../server/config.env"})




const corsOptions = {
    origin: "http://localhost:3000" 
}

app.use(cors(corsOptions));
app.use(express.json());

mongoose.connect(process.env.ATLAS_URI).then(() => {
    const port = process.env.PORT;
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