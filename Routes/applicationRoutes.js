const express = require("express");

const router = express.Router();
const applicationController = require('../controller/applicationController');


router.get("/", applicationController.getApplications); 
router.post("/", applicationController.createApplication); 
router.put("/:id",applicationController.updateApplication);
router.delete("/:id",applicationController.deleteApplication); 

module.exports = router;
