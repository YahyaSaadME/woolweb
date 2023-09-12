const express = require("express")
const BR = express.Router()
const BlogsModal = require("../Modals/BlogsShema")
BR.get("/",async(req,res)=>{
    try {
        const add  = await BlogsModal.find()
        res.json({msg:add})
    } catch (error) {
        res.json({msg:"SMO"})
    }
})

BR.post("/add",async(req,res)=>{
    try {
        const {title,desc,image}= req.body
        const add  = await BlogsModal.create({title,description:desc,image})
        res.json({msg:add})
    } catch (error) {
        res.json({msg:"SMO"})
    }
})



module.exports = BR