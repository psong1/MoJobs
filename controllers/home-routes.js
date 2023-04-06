const express = require('express');
const router = express.Router();
const indeedController = require('./api/indeedController');

// Route for getting job listings from the Indeed API
router.get('/jobs/:searchTerm', indeedController.getJobListings);

module.exports = router;