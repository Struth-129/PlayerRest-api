const express = require("express");
require("../src/db/conn");
const MensRanking = require("./models/Players");

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/players",async(req,res)=>{
    res.send("hello");
})


app.listen(PORT,()=>{
    console.log("Connected");
})