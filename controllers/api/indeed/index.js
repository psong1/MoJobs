const express = require('express');
const router = express.Router();

const indeedController = require('./indeedController');

// router.get('/:searchTerm', indeedController.getJobListings);

router.use('/indeed', indeedController);

module.exports = router;