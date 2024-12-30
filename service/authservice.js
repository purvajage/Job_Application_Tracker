const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

exports.registerUser = async ({ name, email, password }) => {
   
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error("User already exists");
    }

 
    const user = new User({ name, email, password });
    await user.save();


    user.password = undefined;
    return user;
};


exports.loginUser = async ({ email, password }) => {
   
    const user = await User.findOne({ email });
    
    if (!user) {
        throw new Error("Invalid credentials: User not found");
    }

  
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error("Invalid credentials: Incorrect password");
    }


    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });


    user.password = undefined;
    console.log("User found: ", user);
    return { token, user };
};
