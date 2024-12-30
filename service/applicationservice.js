const Application = require('../model/applicationModel');


const { createNotification } = require('../service/notificationservice'); // Correct import path

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

    
    return await Application.find(query).sort({ dateApplied: -1 }); 
};

exports.createApplication = async (data, userId) => {
    const application = new Application({ ...data, user: userId });
    const savedApplication = await application.save();

  
    await createNotification(userId, `New application added for ${data.companyName}`);
    return savedApplication;
};

exports.updateApplication = async (req, res) => {
    try {
        console.log("Request Params:", req.params); // Debugging
        const { id } = req.params; // Ensure this matches your route parameter

        if (!id) {
            return res.status(400).json({ error: "Application ID is missing" });
        }

        const updatedApplication = await Application.findByIdAndUpdate(
            id, // Use the correct parameter here
            req.body,
            { new: true } // Return the updated document
        );

        if (!updatedApplication) {
            return res.status(404).json({ error: "Application not found" });
        }

        res.status(200).json(updatedApplication);
    } catch (error) {
        console.error("Error updating application:", error.message);
        res.status(500).json({ error: "Server error. Please try again." });
    }
};




exports.deleteApplication = async (id) => {
    return await Application.findByIdAndDelete(id);
};
