const express = require("express");
const router = require("./route/createTodoRoute")
const dbConnection = require("./config/database")
const app = express();
require('dotenv').config();
app.use(express.json());

//mounting the router
app.use('/api/todos/v2',router)



// establishing the conneciton
dbConnection();
app.get("/",(req,res)=>{
    console.log("<h1>You are on home page<h1/>")
})

app.listen(process.env.PORT,()=>{
    console.log("You sever has started on port no. ",process.env.PORT);
})