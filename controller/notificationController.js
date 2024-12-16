const { createNotification, getNotifications, markAsRead } = require('../services/notificationService');

exports.getNotifications = async (req, res) => {
    try {
        const notifications = await getNotifications(req.user.id);
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.markAsRead = async (req, res) => {
    try {
        const notification = await markAsRead(req.params.id);
        res.status(200).json(notification);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
