const express = require("express");

const router = express.Router();
const applicationController = require('../controller/applicationController');
// This file handles routes for applications, including retrieving, creating, updating, and deleting applications

router.get("/", applicationController.getApplications); 
router.post("/", applicationController.createApplication); 
router.put("/:id",applicationController.updateApplication);
router.delete("/:id",applicationController.deleteApplication); 

module.exports = router;
