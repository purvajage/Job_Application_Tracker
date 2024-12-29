const jwt = require('jsonwebtoken');
const User = require('../model/userModel'); // Adjust the path as per your project structure

const authMiddleware = async (req, res, next) => {
    try {
        // Extract token from Authorization header
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ error: "Unauthorized: No token provided" });
        }

        const token = authHeader.split(" ")[1]; // Get the token part
        if (!token) {
            return res.status(401).json({ error: "Unauthorized: Token missing" });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized: Invalid token" });
        }

        // Attach the user to the request object
        req.user = await User.findById(decoded.id).select("-password"); // Exclude password field

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        console.error("Authentication error:", error.message);
        res.status(401).json({ error: "Unauthorized: Token verification failed" });
    }
};

module.exports = authMiddleware;
