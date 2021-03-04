const express = require("express");
require("../src/db/conn");
const MensRanking = require("./models/Players");

const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
// app.get("/players",async(req,res)=>{
//     res.send("hello");
// })
app.post("/players",async(req,res)=>{
    
    try{
        const user = new MensRanking(req.body);
        const data_post = await user.save();
        res.status(201).send(data_post);
    }catch(e){
        res.send(e);
    }
})


app.listen(PORT,()=>{
    console.log("Connected");
})