const jwt = require('jsonwebtoken');
const User = require('../model/userModel'); 

const authMiddleware = async (req, res, next) => {
    try {
        
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ error: "Unauthorized: No token provided" });
        }

        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({ error: "Unauthorized: Token missing" });
        }

       
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
