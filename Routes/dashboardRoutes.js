const express = require('express');
const { getDashboard } = require('../controller/dashboardController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// This file handles routes for the dashboard, including retrieving dashboard data
router.use(authMiddleware);

router.get('/', getDashboard); 

module.exports = router;
