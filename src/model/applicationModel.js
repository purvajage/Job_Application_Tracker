const { application } = require("express");
const mongoose=require("mongoose");
const applicationSchema=new mongoose.Schema({
    companyName:{type:String,required:true},
    position:{type:String,require:true},
    status:{type:String,require:'Applied'},
    dateApplied:{type:String,required:true},
});
module.exports=mongoose.model('Application',applicationSchema);