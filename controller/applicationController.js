const {
    getApplications: getApplicationsService,
    createApplication: createApplicationService,
    updateApplication: updateApplicationService,
    deleteApplication: deleteApplicationService,
} = require("../service/applicationservice");
//for retriving applications, creating, updating, and deleting applications
exports.getApplications = async (req, res) => {
    try {
        const applications = await getApplicationsService(req.user._id, req.query);
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createApplication = async (req, res) => {
    try {
        const application = await createApplicationService(req.body, req.user._id);
        res.status(201).json(application);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateApplication = async (req, res) => {
    try {
        const application = await updateApplicationService(req.params.id, req.body);
        res.status(200).json(application);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteApplication = async (req, res) => {
    try {
        await deleteApplicationService(req.params.id);
        res.status(200).json({ message: "Application deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
