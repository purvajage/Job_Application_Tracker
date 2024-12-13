const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
require("dotenv").config();
const app=express();
//middlewares
app.use(cors());
app.use(bodyParser.json());
//basic route
app.get("/",(req,res)=>{
    res.send("welcome to job application tracket API");
});
module.exports=app;