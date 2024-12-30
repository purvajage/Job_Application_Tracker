// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import route files
const applicationRoutes = require('./routes/applicationRoutes');
const authRoutes = require('./routes/authRoutes');
const notificationRoutes = require('./routes/notificationRouter');
const dashboardRoutes = require('./routes/dashboardRoutes');

// Load environment variables
dotenv.config();

// Create Express app instance
const app = express();

// Apply middlewares
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse JSON payloads
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded payloads

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => {
    console.error('MongoDB connection failed:', err);
    process.exit(1); // Exit the app if the database connection fails
  });

// Define root route for server status
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Register API routes
app.use('/api/applications', applicationRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/dashboard', dashboardRoutes);

// Set up server to listen on defined port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
