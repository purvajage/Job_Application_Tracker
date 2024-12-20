const Application = require('../model/applicationModel');

exports.getApplications = async (userId, queryParams) => {
    const { status, companyName, position, startDate, endDate } = queryParams;

   
    let query = { user: userId };

    if (status) {
        query.status = status;
    }
    if (companyName) {
        query.companyName = { $regex: companyName, $options: 'i' }; 
    }
    if (position) {
        query.position = { $regex: position, $options: 'i' }; 
    }
    if (startDate || endDate) {
        query.dateApplied = {};
        if (startDate) query.dateApplied.$gte = new Date(startDate);  
        if (endDate) query.dateApplied.$lte = new Date(endDate);     
    }

    // Fetch applications based on filters
    return await Application.find(query).sort({ dateApplied: -1 }); 
};

exports.createApplication = async (data, userId) => {
    const application = new Application({ ...data, user: userId });
    const savedApplication = await application.save();

    // Notify the user
    await createNotification(userId, `New application added for ${data.companyName}`);
    return savedApplication;
};

exports.updateApplication = async (id, data) => {
    const application = await Application.findByIdAndUpdate(id, data, { new: true });

    // Notify the user
    await createNotification(application.user, `Application status updated to "${data.status}"`);
    return application;
};
exports.deleteApplication = async (id) => {
    return await Application.findByIdAndDelete(id);
};
