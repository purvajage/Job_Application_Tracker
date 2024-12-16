
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const applicationRoutes = require('./routes/applicationRoutes');
const authRoutes = require('./routes/authRoutes');
const dashboardRoutes=require('./routes/dashboardRoutes');


dotenv.config();

const app = express();

app.use(express.json());



app.use('/api/applications', applicationRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes); 
module.exports = app;
