const { registerUser, loginUser } = require("../service/authservice");

exports.register = async (req, res) => {
    try {
        // Call the register service to create a new user
        const user = await registerUser(req.body);

        // Respond with success
        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        // Call the login service to authenticate the user
        const { token, user } = await loginUser(req.body);

        // Respond with token and user details
        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
