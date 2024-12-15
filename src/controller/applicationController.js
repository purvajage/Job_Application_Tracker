const Application=require('../model/applicationModel');
exports.getApplications=async(req,res)=>{
    try{
        const applications=await Application.findAll90;
        res.status(200).json(applications);
    }catch(error){
        res.status(500).json({error:error.message});
    }
};