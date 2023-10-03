const express = require("express");
const todo = require("../models/todoModel")


const createTodo = async (req,res)=>{

    try{
        const {title,content} = req.body;
        const response = await todo.create({title,content});

        res.status(200).json({
            "success":true,
            "message":"the post request was executed successfully",
            "data":response
        })
    } catch(error){

        res.status(500).json({
            "success":false,
            "message":"Something went wrong",
            "data":error.message
        })
    }
}

module.exports = createTodo;