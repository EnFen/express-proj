const mongoose = require('mongoose');

// models
const { User } = require('../../models/User');
const { Host } = require('../../models/Host');
const { Criteria } = require('../../models/Criteria');
const EventWBGS = require('../../models/EventWBGS');

// controllers
const eoiController = require('../../controllers/eoiController')(User, Host, Criteria, EventWBGS);
const dashboardController = require('../../controllers/dashboardController')(EventWBGS);
const usersController = require('../../controllers/usersController')(User);

// Store current app environment
let currentAppEnvironment = process.env.NODE_ENV;

// Set test environment
process.env.NODE_ENV = "test";

// Database connection
const testDbConn = `mongodb://localhost/real-world-test`;

// Initilise mongoose
mongoose.connect(testDbConn, (err) => {
    if (err) {
        console.log('Error connecting to test database', err);
    } else {
        console.log(`Connected to test database!`);
    }
});

// Testing


// Reset app environment 
process.env.NODE_ENV = currentAppEnvironment;

