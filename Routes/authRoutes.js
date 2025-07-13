const express = require('express');
const { register, login } = require('../controller/authController'); 
const router = express.Router();
// This file handles user registration and login functionalities
router.post('/register', register); 
router.post('/login', login);       

module.exports = router;
