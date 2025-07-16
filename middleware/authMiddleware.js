const jwt = require('jsonwebtoken');
const User = require('../model/userModel'); 
// Middleware to authenticate user based on JWT token
const authMiddleware = async (req, res, next) => {
    try {
        
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ error: "Unauthorized: No token provided" });
        }
// Check if the token is present in the Authorization header
        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({ error: "Unauthorized: Token missing" });
        }

       // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized: Invalid token" });
        }

        
        req.user = await User.findById(decoded.id).select("-password");


        next();
    } catch (error) {
        console.error("Authentication error:", error.message);
        res.status(401).json({ error: "Unauthorized: Token verification failed" });
    }
};

module.exports = authMiddleware;
