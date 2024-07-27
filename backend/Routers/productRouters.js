const express = require('express')
const router = express.Router()
const productModel = require('../Models/productModel')

router.get("/", async(req,res) => {
    try{
        const response = await productModel.find({})
        res.status(200).json(response)
    }
    catch(err){
        res.status(400).json({error: err.message})
    }
})

router.post("/", async(req,res) => {
    const {id,title,image,rate,stock,price} = req.body
    try{
        const response = await productModel.create({id,title,image,rate,stock,price})
        res.status(200).json(response)
    }
    catch(err){
        res.status(400).json({error: err.message})
    }
})

router.delete("/:id", async(req,res) => {
    const {id} = req.params
    try{
        const response = await productModel.findByIdAndDelete(id)
        res.status(200).json(response)
    }
    catch(err){
        res.status(400).json({error: err.message})
    }
})
    
module.exports = router;
