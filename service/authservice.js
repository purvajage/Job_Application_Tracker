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
    console.log("Login email:", email); // Debugging log

    // Find user by email (case-insensitive)
    const user = await User.findOne({ email: { $regex: new RegExp(`^${email}$`, 'i') } });
    
    if (!user) {
        console.error("User not found in the database");
        throw new Error("Invalid credentials: User not found");
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        console.error("Incorrect password provided");
        throw new Error("Invalid credentials: Incorrect password");
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    // Remove password before returning user data
    user.password = undefined;
    console.log("User found:", user); // Debugging log
    return { token, user };
};
