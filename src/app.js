
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const dashboardRoutes = require('./route/dashboardRoutes');
const applicationRoutes = require('./route/applicationRoutes');
const authRoutes = require('./route/authRoutes');

dotenv.config();

const app = express();

app.use(express.json());


app.use('/api/dashboard', dashboardRoutes); 
app.use('/api/applications', applicationRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;
