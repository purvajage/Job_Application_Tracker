const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("mongo db connected");
    }catch(error){
        console.error("database connection failed",error.message);
        process.exit(1);
    }
};
module.exports=connectDB;