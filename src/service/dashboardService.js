const Application = require('../models/applicationModel');
const moment = require('moment'); // To handle date formatting and date ranges

// Function to fetch dashboard statistics
exports.getDashboardStats = async (userId) => {
    // Total applications
    const totalApplications = await Application.countDocuments({ user: userId });

    // Applications grouped by status
    const applicationsByStatus = await Application.aggregate([
        { $match: { user: userId } },
        { $group: { _id: '$status', count: { $sum: 1 } } }
    ]);

    // Recent applications (last 7 days)
    const recentApplications = await Application.find({
        user: userId,
        updatedAt: { $gte: moment().subtract(7, 'days').toDate() }
    }).sort({ updatedAt: -1 });

    // Upcoming interviews (applications with interview dates)
    const upcomingInterviews = await Application.find({
        user: userId,
        interviewDate: { $gte: new Date() }
    }).sort({ interviewDate: 1 });

    return {
        totalApplications,
        applicationsByStatus,
        recentApplications,
        upcomingInterviews
    };
};
