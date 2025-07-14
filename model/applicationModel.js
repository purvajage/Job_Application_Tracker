// This file defines the Mongoose schema and model for job applications in the Job Application Tracker application.
const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    position: { type: String, required: true },
    status: { type: String, required: true, default: 'Applied' },
    dateApplied: { type: Date, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Application = mongoose.model('Application', applicationSchema);  

module.exports = Application;  
