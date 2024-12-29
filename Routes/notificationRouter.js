const express = require('express');
const { getNotifications, markAsRead } = require('../controller/notificationController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.get('/', getNotifications); 
router.put('/:id/read', markAsRead); 

module.exports = router;
