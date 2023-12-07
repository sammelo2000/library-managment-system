import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
const app = express();



dotenv.config({path: "../backend/server/config.env"})




const corsOptions = {
    origin: "http://localhost:3000" 
}

app.use(cors(corsOptions));
app.use(express.json());

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