const mongoose = require("mongoose")
const todoModel = require("../models/todoModel")

const deleteTodo = async(req,res) => {
    try{

        const {id} = req.params;
        const response = await todoModel.findByIdAndDelete({"_id":id});

        res.status(200).json({
            "success":true,
            "message":response
        })

    }
    catch(error){
        res.status(500).json({
           "success":false,
           "message":error.message 
        })
    }
}

module.exports = deleteTodo;