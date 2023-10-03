const mongoose = require("mongoose");
const todoModel = require("../models/todoModel");

const updateTodo = async (req,res)=>{

    try{
           const {id} = req.params;
           const {title,content} = req.body;
           const response = await todoModel.findByIdAndUpdate(id,{
            title:title,
            content:content,
            updatedAt:Date.now()
           })

           res.status(200).json({
            "success":true,
            "message":response,
           })
    }catch(error){
        res.status(500).json({
            "success":false,
            "message":error.message
        })

    }
}

module.exports = updateTodo;