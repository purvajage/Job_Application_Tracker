const express = require('express');
const { getDashboard } = require('../controller/dashboardController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();


router.use(authMiddleware);

router.get('/', getDashboard); 

module.exports = router;
