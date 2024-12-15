const  { registerUser , loginUser}=require("../service/authservice");
exports.register=async(req,res)=>{
    try{
        const user=await registerUser(req.body);
        res.status(201).json({message:"user registered sucessfully",user});
    }catch(error){
        res.status(400).json({error:error.message});
    }
};
exports.login=async(req,res)=>{
    try{
        const {token,user}=await loginUser(req.body)
        res.status(200).json({message:"login sucessfully"});
    }catch(error){
        res.status(400).json({error:error.message});
    }
}