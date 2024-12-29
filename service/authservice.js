const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

exports.registerUser = async ({ name, email, password }) => {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error("User already exists");
    }

    // Create a new user
    const user = new User({ name, email, password });
    await user.save();

    // Remove password before returning
    user.password = undefined;
    return user;
};

// Login User Service
exports.loginUser = async ({ email, password }) => {
    // Find user by email
    const user = await User.findOne({ email });
    
    if (!user) {
        throw new Error("Invalid credentials: User not found");
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error("Invalid credentials: Incorrect password");
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });

    // Remove password before returning
    user.password = undefined;
    console.log("User found: ", user);
    return { token, user };
};
