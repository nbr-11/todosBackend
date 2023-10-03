const mongoose = require("mongoose");
const todoModel = require("../models/todoModel")



const getTodoById = async(req,res)=>{
      
    try {
        const {id} = req.params;
        const todo = await todoModel.findById({"_id":id});
        

        if(!todo){
            res.status(404).json({
                "success":false,
                "message":"Todo not found"
               
            })
        }
        else{
            res.status(200).json({
                "success":true,
                "message":"The request was successful",
                "data":todo
            })
        }
        
        
    } catch (error) {
        res.status(500).json({
            "success":false,
            "message":error.message
           
        })
        
    }
}

module.exports = getTodoById;