const express = require("express");
const {
    getApplications,
    createApplication,
    updateApplication,
    deleteApplication,
} = require("../controller/applicationController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.use(authMiddleware); 

router.get("/", getApplications); 
router.post("/", createApplication); 
router.put("/:id", updateApplication);
router.delete("/:id", deleteApplication); 

module.exports = router;
