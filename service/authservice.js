const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password:", hashedPassword);

    // Create and save the user
    const newUser = new User({
        name,
        email,
        password: hashedPassword, // Ensure the password is hashed
    });

    return await newUser.save();

};

// Login User Service
exports.loginUser = async (userData) => {
    const { email, password } = userData;

    // Step 1: Find the user
    const user = await User.findOne({ email });
    console.log("User found:", user);

    if (!user) {
        throw new Error("Invalid credentials: User not found");
    }

    // Step 2: Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("Password provided:", password);
    console.log("Password in DB:", user.password);
    console.log("Is password valid:", isPasswordValid);

    if (!isPasswordValid) {
        throw new Error("Invalid credentials: Incorrect password");
    }

    // Step 3: Return user and token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    });

    return { token, user };

};
