const Notification = require('../model/notificationModel');

exports.createNotification = async (userId, message) => {
    const notification = new Notification({ user: userId, message });
    return await notification.save();
};

exports.getNotifications = async (userId) => {
    return await Notification.find({ user: userId }).sort({ createdAt: -1 });
};

exports.markAsRead = async (id) => {
    return await Notification.findByIdAndUpdate(id, { read: true }, { new: true });
};
