const { getApplications, createApplication, updateApplication, deleteApplication } = require('../service/applicationservice');

exports.getApplications = async (req, res) => {
    try {
        const applications = await getApplications(req.user.id, req.query); // Pass query parameters
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.createApplication = async (req, res) => {
    try {
        const application = await createApplication(req.body, req.user.id);
        res.status(201).json(application);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateApplication = async (req, res) => {
    try {
        const application = await updateApplication(req.params.id, req.body);
        res.status(200).json(application);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteApplication = async (req, res) => {
    try {
        await deleteApplication(req.params.id);
        res.status(200).json({ message: 'Application deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
