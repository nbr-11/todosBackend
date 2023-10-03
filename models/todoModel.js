const mongoose =  require("mongoose");

const todoSchema = new mongoose.Schema({
    title:{
          type:String,
          required:true,
          maxlength:100
    },
    content:{
        type:String,
        required:true,
        maxlength:350
    },
    updateAt:{
       type:Date,
       required:true,
       default:Date.now,
    }
}) 

module.exports = new mongoose.model("todo",todoSchema);