const Application = require('../model/applicationModel');
const moment = require('moment'); 


exports.getDashboardStats = async (userId) => {
   
    const totalApplications = await Application.countDocuments({ user: userId });

   
    const applicationsByStatus = await Application.aggregate([
        { $match: { user: userId } },
        { $group: { _id: '$status', count: { $sum: 1 } } }
    ]);

   
    const recentApplications = await Application.find({
        user: userId,
        updatedAt: { $gte: moment().subtract(7, 'days').toDate() }
    }).sort({ updatedAt: -1 });


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
