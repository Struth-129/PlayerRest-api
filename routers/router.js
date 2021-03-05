const express = require("express");
const mongoose = require("mongoose");
const router = new express.Router();
const MensRanking = require("../models/Players")
router.post("/players",async(req,res)=>{
    
    try{
        const user = new MensRanking(req.body);
        const data_post = await user.save();
        res.status(201).send(data_post);
    }catch(e){
        res.status(400).send(e);
    }
})

router.get("/players/:id/",async(req,res)=>{
    try{
        const _id = req.params.id;
        const data = await MensRanking.findById(_id);
        res.status(200).send(data);
    }catch(e){
        res.status(400).send(e);
    }
})

router.delete("/players/:id/",async(req,res)=>{
    try{
        const _id = req.params.id;
        const data = await MensRanking.findByIdAndDelete(_id);
        res.status(201).send(data);
    }catch(e){
        res.status(400).send(e);
    }
})

router.patch("/players/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const data = await MensRanking.findByIdAndUpdate(_id,req.body); 
        res.status(201).send(data);
    }catch(e){
        res.status(4500).send(e);
    }
})

module.exports = router;