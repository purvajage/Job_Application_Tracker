const express = require("express");
const {
    getApplications,
    createApplication,
    updateApplication,
    deleteApplication,
} = require("../controller/applicationController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.use(authMiddleware); // Authenticate all routes

router.get("/", getApplications); // Get all applications for a user
router.post("/", createApplication); // Create a new application
router.put("/:id", updateApplication); // Update an application
router.delete("/:id", deleteApplication); // Delete an application

module.exports = router;
