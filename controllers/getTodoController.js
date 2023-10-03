const mongoose = require("mongoose");
const todoModel = require("../models/todoModel")


const getTodo = async (req,res)=>{
       
    try{
        const todos = await todoModel.find({});

        res.status(200).json({
            "success":true,
            "message":"the get request was successfully completed",
            "data":todos
        })
    }catch(error){

        res.status(500).json({
            "success":false,
            "message":error.message,
        })
    }

}

module.exports = getTodo;

