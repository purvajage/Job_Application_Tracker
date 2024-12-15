const express=require("express");
const { getApplication, getApplications }=require("../controller/applicationController");
const router=express.Router();
router.get("/",getApplications);
module.exports=router;