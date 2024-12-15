const { getDashboardStats } = require('../services/dashboardService');

exports.getDashboard = async (req, res) => {
    try {
        const dashboardData = await getDashboardStats(req.user.id);
        res.status(200).json(dashboardData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
