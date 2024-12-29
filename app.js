// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import Routes
const applicationRoutes = require('./routes/applicationRoutes');
const authRoutes = require('./routes/authRoutes');
const notificationRoutes = require('./routes/notificationRouter');
const dashboardRoutes = require('./routes/dashboardRoutes');

// Initialize dotenv for environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors()); // Allow cross-origin requests (optional, use as needed)
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => {
    console.error('MongoDB connection failed:', err);
    process.exit(1); // Exit if DB connection fails
  });

// Test route to ensure the server is working
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Use application, authentication, notification, and dashboard routes
app.use('/api/applications', applicationRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/dashboard', dashboardRoutes);

// Set server port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
