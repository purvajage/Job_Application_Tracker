const User=require("../model/userModel");
const jwt=require("jsonwebtoken");
exports.registerUser=async(data)=>{
    const { name,email,password }=data;
    //check if user extis 
    const existingUser=await User.findOne({email});
    if(extistingUser) throw new Error("user already exits");
    //create new user 
    const user=new User({name,email,password});
    return await user.save();

};
exports.loginUser=async(data)=>{
    const {email,password}=data;
    const user=await User.findOne({email});
    if(!user) throw new Error("invalid email or password");
    //compare passwords
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch) throw new Error("invalid user of password");
    //generate JWT
    const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1d'});
    return {token,user};
}
