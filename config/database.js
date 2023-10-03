const mongoose = require('mongoose');
require("dotenv").config()

const dbConnection = ()=>{

    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then((res)=>{
        console.log("success");
    })
    .catch((error)=>{
        console.log(error);
        process.exit();
    })

}

module.exports = dbConnection;