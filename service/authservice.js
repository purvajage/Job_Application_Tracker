const bcrypt = require('bcrypt');
const User = require('../model/userModel'); // Adjust the path as per your project structure

// Register User Service
exports.registerUser = async (userData) => {
    const { name, email, password } = userData;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error("User already exists");
    }

    // Hash the password
    try {
        const salt = await bcrypt.genSalt(10); // Generate salt for hashing
        const hashedPassword = await bcrypt.hash(password, salt); // Hash password
        console.log("Hashed password generated:", hashedPassword);

        // Create and save the user
        const newUser = new User({
            name,
            email,
            password: hashedPassword, // Save the hashed password
        });

        return await newUser.save();
    } catch (error) {
        console.error("Error while hashing password:", error.message);
        throw new Error("Failed to hash password during registration");
    }
};

const jwt = require('jsonwebtoken');
 // Adjust the path as per your project structure

// Login User Service
exports.loginUser = async (userData) => {
    const { email, password } = userData;

    // Step 1: Find the user
    const user = await User.findOne({ email });
    console.log("User found in DB:", user);

    if (!user) {
        throw new Error("Invalid credentials: User not found");
    }

    // Step 2: Compare passwords
    try {
        console.log("Password provided:", password); // Log the provided password
        console.log("Password in DB:", user.password); // Log the hashed password from DB

        // Compare the passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log("Is password valid:", isPasswordValid);

        if (!isPasswordValid) {
            throw new Error("Invalid credentials: Incorrect password");
        }

        // Step 3: Return user and token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1d', // Token valid for 1 day
        });

        return { token, user };
    } catch (error) {
        console.error("Error while comparing passwords:", error.message);
        throw new Error("Failed to validate password during login");
    }
};
